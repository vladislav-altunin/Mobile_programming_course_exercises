import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Pressable} from 'react-native';

export default function App() {

  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [result, setResult] = useState();

  const add = () => {setResult(parseFloat(num1.replace(",", ".")) + parseFloat(num2.replace(",", ".")))};
  const substract = () => {setResult(num1 - num2)};

  return (
    <View style={styles.container}>
      <View>
        <Text>Result: {result}</Text>
      </View>
      <View>
        <TextInput keyboardType='numeric' onChangeText={input => setNum1(input)} value={num1} style={styles.inputBox}></TextInput>
        <TextInput keyboardType='numeric' onChangeText={input => setNum2(input)} value={num2} style={styles.inputBox}></TextInput>
      </View>
      <View style={styles.buttonView}>
        <Pressable style={styles.button} onPress={add}>
          <Text style={styles.text}>+</Text>
        </Pressable>
        <Pressable style={styles.button} onPress={substract}>
          <Text style={styles.text}>-</Text>
        </Pressable>
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

  inputBox: {
    width: 200,
    borderColor: 'black',
    borderWidth: 1,
  },

  buttonView: {
    flexDirection: 'row',
  },

  button: {
    backgroundColor: '#338FFF',
    padding: 10,
    margin: 20,
  },

  text: {
    color: 'white',
  }
});
