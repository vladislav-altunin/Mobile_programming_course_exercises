import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { Pressable, StyleSheet, Text, TextInput, View, Alert } from 'react-native';

export default function App() {

  const [num, setNum] = useState();
  const [secretNum, setSecretNum] = useState();
  const [count, setCount] = useState(1);
  const [message, setMessage] = useState("Guess a number between 1-100");

  useEffect( () => {
    setSecretNum(Math.floor(Math.random() * 100) + 1);
  }, []);

  const makeGuess = () => {
    if(num < secretNum) {
      setCount(count + 1);
      setMessage(`Your guess ${num} is too low`);
      setNum();
    } else if(num > secretNum) {
      setCount(count + 1);
      setMessage(`Your guess ${num} is too high`);
      setNum();
    } else {
      setCount(count + 1);
      setMessage("Guess a number between 1-100");
      Alert.alert(`You guessed the number in ${count} guesses`);
      setSecretNum(Math.floor(Math.random() * 100));
      setCount(1);
      setNum();
    }
  }

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.message}>{message}</Text>
      </View>
      <View>
        <TextInput keyboardType='numeric' onChangeText={input => setNum(input)} value={num} style={styles.textInput}></TextInput>
      </View>
      <View>
        <Pressable style={styles.button} onPress={makeGuess} ><Text>MAKE GUESS</Text></Pressable>
      </View>
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },

  textInput: {
    width: 110,
    height: 30,
    borderColor: 'grey',
    borderWidth: 1,
  },

  button: {
    backgroundColor: '#338FFF',
    padding: 10,
    margin: 20,
  },

  message: {
    padding: 10,
    margin: 20,
  },
  
});
