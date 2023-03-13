import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Alert, FlatList, Pressable, StyleSheet, Text, TextInput, View, Image } from 'react-native';

export default function App() {
  const [keyword, setKeyword] = useState('');
  const [recipeList, setrecipeList] = useState([]);

  const findRecipies = () => {
    fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${keyword}`)
    .then(response => response.json())
    .then(data => setrecipeList(data.meals))
    .catch(error => {Alert.alert('Error', error);});
  }

  return (
    <View style={styles.container}>
        <FlatList
          contentContainerStyle={styles.contentContainerStyle}
          data={recipeList}
          keyExtractor={(item, index) => index.toString()}
          renderItem={ ({item}) => 
          <View style={styles.cardContainer}>
            <Text style={styles.cardText}>{item.strMeal}</Text>
            <Image
              source={{uri: item.strMealThumb}}
              style={styles.image}
            />
          </View>
          }
        />
      <View style={styles.inputButtonContainer}>
        <TextInput 
          style={styles.inputField} 
          value={keyword} 
          onChangeText={text => setKeyword(text)}
          placeholder='keyword'
          />
        <Pressable style={styles.pressable} onPress={findRecipies}>
          <Text style={styles.pressableText}>FIND</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },

  contentContainerStyle: {
    paddingVertical: 50, 
    paddingHorizontal: 20
  },

  cardContainer: {
    borderBottomColor: 'grey', 
    borderBottomWidth: 1,
  },

  cardText: {
    fontSize: 20,
    fontWeight: 'bold',
  },

  inputButtonContainer: {
    flex: 0,
    alignItems: 'center',
    justifyContent: 'center',
  },

  inputField: {
    width: 150,
    height: 40,
    borderColor: 'grey',
    borderWidth: 1,
    fontSize: 25,
    textAlign: 'center',
  },

  pressable: {
    backgroundColor: '#338FFF',
    padding: 10,
    marginTop: 10,
    marginBottom: 30,
    marginHorizontal: 5,
  },

  pressableText: {
    color: 'white',
  },

  image: {
    width:75,
    height:75,
    margin:8
  }

});
