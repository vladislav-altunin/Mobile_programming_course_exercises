import {
  FlatList,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import { useEffect, useState } from 'react';

/* Firebase imports */
import { initializeApp } from 'firebase/app';
import { getDatabase, push, ref, onValue, update } from 'firebase/database';

export default function App() {
  const firebaseConfig = {
    apiKey:
      'AIzaSyCFkTZjq9iAmYl88fAasxKds7SExZceL20AIzaSyCFkTZjq9iAmYl88fAasxKds7SExZceL20',
    authDomain: 'assignment12-shopping-list.firebaseapp.com', // 'project-id.firebaseapp.com'
    databaseURL:
      'https://assignment12-shopping-list-default-rtdb.europe-west1.firebasedatabase.app/', // 'https://project-id.firebaseio.com'
    projectId: 'assignment12-shopping-list',
    storageBucket: 'assignment12-shopping-list.appspot.com', // 'project-id.appspot.com'
  };

  const app = initializeApp(firebaseConfig);
  const database = getDatabase(app);

  /* State vars */
  const [listItem, setListItem] = useState('');
  const [listAmnt, setListAmnt] = useState('');
  const [listOfItems, setListOfItems] = useState([]);

  /* Loading the database */
  useEffect(() => {
    const shoplistRef = ref(database, 'shoplistItems/');

    onValue(shoplistRef, dbSnapshot => {
      //empty data in case there is something already
      //otherwise, duplicated keys and / or values
      setListOfItems([]);

      dbSnapshot.forEach(obj => {
        setListOfItems(current => [
          //current => [] is necessary, otherwise holds only the last obj
          ...current,
          {
            id: obj.key,
            product: obj.val().product,
            amount: obj.val().amount,
          },
        ]);
      });
    });
  }, []);

  /* CRUD functionality */
  //save
  const saveItem = () => {
    push(ref(database, 'shoplistItems/'), {
      product: listItem,
      amount: listAmnt,
    });

    //clear input fields
    setListAmnt('');
    setListItem('');
  };

  //delete
  const deleteItem = itemId => {
    update(ref(database, `shoplistItems/`), { [itemId]: null }); //remove() would work as well
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Procudt"
        style={styles.textInput}
        value={listItem}
        onChangeText={value => setListItem(value)}
      ></TextInput>
      <TextInput
        placeholder="Amount"
        style={styles.textInput}
        value={listAmnt}
        onChangeText={value => setListAmnt(value)}
      ></TextInput>
      <Pressable style={styles.pressable} onPress={saveItem}>
        <Text style={styles.pressText}>Save</Text>
      </Pressable>
      <FlatList
        style={{ flexGrow: 0 }}
        data={listOfItems}
        // keyExtractor={(item, index) => index.toString()} // works when values are duplicated (array not emptied)
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View style={{ flexDirection: 'row' }}>
            <Text style={styles.listText}>{item.product}</Text>
            <Text style={styles.listText}>{item.amount}</Text>
            <Text style={styles.listText} onPress={() => deleteItem(item.id)}>
              Delete
            </Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  listText: {
    marginHorizontal: 5,
  },
  textInput: {
    width: 200,
    height: 40,
    borderColor: 'grey',
    borderWidth: 1,
    fontSize: 20,
    margin: 2,
  },
  pressText: {
    fontSize: 15,
    fontWeight: 'bold',
    color: 'white',
    padding: 20,
  },
  pressable: {
    backgroundColor: '#338FFF',
    margin: 25,
  },
});
