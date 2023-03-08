import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Pressable, FlatList } from 'react-native';

export default function App() {

  const [listItem, setListItem] = useState('');
  const [listOfItems, setListOfItems] = useState([]);

  const addItem = () => {
    setListOfItems([...listOfItems, {title: `${listItem}`}]);
    setListItem('');
  }

  const clearList = () => {
    setListOfItems([]);
  }

  return (
    <View style={styles.container}>
      <View>
        <TextInput style={styles.input} onChangeText={input => setListItem(input)} value={listItem}></TextInput>
      </View>
      <View style={styles.buttonView}>
        <Pressable style={styles.button} onPress={addItem}>
          <Text>Add</Text>
        </Pressable>
        <Pressable style={styles.button} onPress={clearList}>
          <Text>Clear</Text>
        </Pressable>
      </View>
      <View style={styles.flatlistView}>
        <FlatList
          data={listOfItems}
          renderItem={({item}) => <Text style={styles.itemText}>{item.title}</Text>}
          keyExtractor={(item, index) => index.toString()}
          ListHeaderComponent={()=><Text style={styles.headerText}>Shopping list</Text>}
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
    margin: 20,
    borderWidth: 1,
    borderColor: 'grey',
  },

  buttonView: {
    flexDirection: 'row',
    padding: 50,
  },
  
  button: {
    backgroundColor: '#338FFF',
    padding: 10,
    margin: 1,
  },

  flatlistView: {
    height: 500,
    flexGrow: 0,
  },

  headerText: {
    color: 'blue',
    fontWeight: 'bold',
  },

  itemText: {
    paddingLeft: 20,
  },

});
