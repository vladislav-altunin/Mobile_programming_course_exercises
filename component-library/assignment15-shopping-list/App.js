import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Alert,
  FlatList,
} from 'react-native';

/* React Native Elements imports */
import { Header, Icon, Input, Button, ListItem } from '@rneui/base';
import { useState } from 'react';

export default function App() {
  const [listItem, setListItem] = useState({ product: '', amount: '' });
  const [listOfItems, setListOfItems] = useState([]);

  const saveItem = () => {
    setListOfItems([...listOfItems, listItem]);
    setListItem({ product: '', amount: '' });
  };

  const deleteItem = index => {
    setListOfItems(listOfItems =>
      listOfItems.filter((_item, i) => {
        return index !== i;
      })
    );
  };

  return (
    <SafeAreaView>
      <View style={{ alignItems: 'center' }}>
        <Header
          centerComponent={{
            text: 'SHOPPING LIST',
            style: { padding: 10, color: '#fff' },
          }}
        ></Header>
        <Input
          autoFocus={true}
          placeholder="Product"
          label="PRODUCT"
          value={listItem.product}
          onChangeText={p => setListItem({ ...listItem, product: p })}
        />
        <Input
          placeholder="Amount"
          label="AMOUNT"
          value={listItem.amount}
          onChangeText={a => setListItem({ ...listItem, amount: a })}
        />
        <Button
          size="lg"
          containerStyle={{ width: 150, margin: 10 }}
          raised
          icon={{ name: 'save', color: '#fff' }}
          title="SAVE"
          onPress={saveItem}
        />
        <FlatList
          data={listOfItems}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item, index }) => (
            <ListItem bottomDivider>
              <ListItem.Content>
                <ListItem.Title>
                  {item.product} {index}
                </ListItem.Title>
                <ListItem.Subtitle>{item.amount}</ListItem.Subtitle>
              </ListItem.Content>
              <Icon
                name="delete"
                type="material"
                color="red"
                onPress={() => deleteItem(index)}
              ></Icon>
            </ListItem>
          )}
          style={{ width: '100%' }}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
