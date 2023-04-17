import { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Pressable,
  SafeAreaView,
} from 'react-native';
import * as Contacts from 'expo-contacts';

export default function App() {
  const [contacts, setContacts] = useState({});

  const getContacts = async () => {
    //ask for permission
    const { status } = await Contacts.requestPermissionsAsync();
    //if permission exists, the status is "granted"
    if (status == 'granted') {
      //get firs name, last name and phone numbers
      const { data } = await Contacts.getContactsAsync({
        fields: [Contacts.Fields.Name, Contacts.Fields.PhoneNumbers],
      });
      //if data exists, update the state
      if (data.length > 0) {
        setContacts(data);
        console.log('This is data:');
        console.log(JSON.stringify(data, null, 2));
      }
    }
  };

  //Flatlist item separator
  FlatListItemSeparator = () => {
    return <View style={styles.flatListItemSeparator} />;
  };

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <FlatList
          style={styles.flatList}
          data={contacts}
          /* IMPORTANT TO REMEMBER */
          /* Use either CLEAN ARROW:
        keyExtractor={item => item.id}
        OR RETURN:
        keyExtractor={item => {return item.id;}}
        OTHERWISE, "each child should have a unique 'key' prop" */
          keyExtractor={item => item.id}
          ItemSeparatorComponent={this.FlatListItemSeparator}
          renderItem={({ item }) => (
            <View>
              <Text style={{ fontWeight: 'bold' }}>{item.name}</Text>
              {item.phoneNumbers.map((phoneObj, i) => (
                <Text key={i}>{phoneObj.number}; </Text>
              ))}
            </View>
          )}
          ListHeaderComponent={() => {
            if (contacts.length > 0) {
              return <Text style={{ marginVertical: 5 }}>CONTACTS</Text>;
            }
          }}
        />
      </View>
      <Pressable style={styles.button} onPress={getContacts}>
        <Text style={styles.text}>SHOW CONTACTS</Text>
      </Pressable>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  button: {
    marginVertical: 50,
    position: 'absolute',
    bottom: 0,
    backgroundColor: '#2196f3',
    padding: 20,
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  flatListItemSeparator: {
    height: 10,
    width: '100%',
    backgroundColor: '#fff',
  },
  text: {
    fontWeight: '700',
    color: '#ffffff',
  },
});
