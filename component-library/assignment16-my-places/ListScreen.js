import { useEffect, useState } from 'react';

/* Firebase Realtime Database imports */
import { initializeApp } from 'firebase/app'; // to init the app
import { getDatabase, onValue, push, ref, update } from 'firebase/database'; // db services

/* React Native Elements imports */
import { Button, Input, ListItem } from '@rneui/themed';
import { FlatList, StyleSheet, Text, View } from 'react-native';

/* APP */
export default function ListScreen({ navigation }) {
  const [address, setAddress] = useState({ id: '', street: '' });
  const [addressList, setAddressList] = useState([]);

  /* Firebase init, connecting to db */
  //1. Mandatory credentials
  const firebaseConfig = {
    apiKey: 'AIzaSyC0HF5yFUwJAJVSkTQsMihN5Q7lgWXOjO0',
    authDomain: 'assignment16-component-library.firebaseapp.com',
    // The value of `databaseURL` depends on the location of the database
    databaseURL:
      'https://assignment16-component-library-default-rtdb.europe-west1.firebasedatabase.app/',
    projectId: 'assignment16-component-library',
    storageBucket: 'assignment16-component-library.appspot.com',
  };

  //2. Init app
  const app = initializeApp(firebaseConfig);
  //3. Open db
  const db = getDatabase(app);
  //4. Load db with the first load
  useEffect(() => {
    console.log('useEffect is working in the ListScreen.js');
    //empty the array beofre every state update, otherwise duplicated values
    setAddressList([]);

    const addressesRef = ref(db, 'firebaseAddressList/');
    onValue(addressesRef, dbSnap => {
      const data = dbSnap.val();
      console.log(data);
      if (data !== null) {
        setAddressList(Object.values(data));
      } else {
        setAddressList([]);
      }
    });
    console.log(addressList);
    console.log('end of use effect');
  }, []);

  /* CRUD functionality */
  const saveAddress = () => {
    const newKey = push(ref(db, 'firebaseAddressList/'), {
      id: '',
      street: address.street,
    }).key;
    update(ref(db, `firebaseAddressList/${newKey}`), { id: newKey }); //remove() would work as well
    //clear input fields
    setAddress({ id: '', street: '' });
  };

  const deleteAddress = id => {
    update(ref(db, `firebaseAddressList/`), { [id]: null }); //remove() would work as well
  };

  const onPressTest = () => {
    console.log('on press works');
  };

  const testData = ['Helsinki', 'Espoo', 'Vantaa', 'Kauniainen'];

  return (
    <View style={styles.container}>
      <Input
        placeholder="Type in address"
        label="PLACE FINDER"
        name="street"
        value={address.street}
        onChangeText={text => setAddress({ ...address, street: text })}
      />
      <Button
        size="lg"
        containerStyle={{ marginHorizontal: 10 }}
        raised
        icon={{ name: 'save', color: '#fff' }}
        title="SAVE"
        onPress={saveAddress}
      />
      <FlatList
        data={addressList}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index }) => {
          return (
            <ListItem
              bottomDivider
              onPress={() =>
                navigation.navigate('Map', { location: item.street })
              }
              onLongPress={() => deleteAddress(item.id)}
            >
              <ListItem.Content>
                <ListItem.Title>{item.street}</ListItem.Title>
              </ListItem.Content>
              <ListItem.Chevron />
            </ListItem>
          );
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginVertical: 5,
  },
});
