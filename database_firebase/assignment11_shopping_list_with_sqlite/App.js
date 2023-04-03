import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Pressable,
  FlatList,
} from 'react-native';
import * as SQLite from 'expo-sqlite';

export default function App() {
  const [listItem, setListItem] = useState('');
  const [listAmnt, setListAmnt] = useState('');
  const [listOfItems, setListOfItems] = useState([]);

  //Opening the database
  const db = SQLite.openDatabase('shoppinglist.db');

  useEffect(() => {
    db.transaction(
      tx => {
        tx.executeSql(
          'create table if not exists shoppinglist (id integer primary key not null, listItem text, listAmnt text);'
        );
      },
      null,
      updateList
    );
  }, []);
  /* CRUD functions */

  //save
  const saveItem = () => {
    db.transaction(
      tx => {
        tx.executeSql(
          'insert into shoppinglist (listItem, listAmnt) values (?, ?);',
          [listItem, listAmnt]
        );
      },
      null,
      updateList
    );
  };

  //delete
  const deleteItem = itemId => {
    db.transaction(
      tx => {
        tx.executeSql('delete from shoppinglist where id = ?;', [itemId]);
      },
      null,
      updateList
    );
  };

  //Updates state listOfItems after each successful CRUD operation
  const updateList = () => {
    db.transaction(
      tx => {
        tx.executeSql('select * from shoppinglist;', [], (_, { rows }) =>
          setListOfItems(rows._array)
        );
      },
      null,
      null
    );

    //clear input fields
    setListItem('');
    setListAmnt('');
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Product"
        style={styles.input}
        onChangeText={input => setListItem(input)}
        value={listItem}
      ></TextInput>
      <TextInput
        placeholder="Amount"
        style={styles.input}
        onChangeText={input => setListAmnt(input)}
        value={listAmnt}
      ></TextInput>
      <View style={styles.buttonView}>
        <Pressable style={styles.button} onPress={saveItem}>
          <Text>Save</Text>
        </Pressable>
      </View>
      <View style={styles.flatlistView}>
        <FlatList
          data={listOfItems}
          renderItem={({ item }) => (
            <View style={styles.itemListView}>
              <Text style={styles.itemText}>{item.listItem},</Text>
              <Text style={styles.itemText}>{item.listAmnt}</Text>
              <Text
                style={styles.boughtButton}
                onPress={() => deleteItem(item.id)}
              >
                Bought
              </Text>
            </View>
          )}
          keyExtractor={(item, index) => index.toString()}
          ListHeaderComponent={() => (
            <Text style={styles.headerText}>Shopping list</Text>
          )}
        />
      </View>
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

  input: {
    width: 150,
    height: 30,
    margin: 5,
    borderWidth: 1,
    borderColor: 'grey',
  },

  buttonView: {
    flexDirection: 'row',
  },

  button: {
    backgroundColor: '#338FFF',
    padding: 10,
    margin: 1,
  },

  flatlistView: {
    height: 500,
    margin: 40,
    flexGrow: 0,
  },

  headerText: {
    fontWeight: 'bold',
    textAlign: 'center',
  },
  itemListView: {
    flex: 1,
    flexDirection: 'row',
  },
  itemText: {
    margin: 5,
  },
  boughtButton: {
    margin: 5,
    color: 'blue',
    fontWeight: 'bold',
  },
});
