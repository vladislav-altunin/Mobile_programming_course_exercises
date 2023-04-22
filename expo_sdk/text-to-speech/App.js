import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Pressable, TextInput } from 'react-native';
import * as Speech from 'expo-speech';
import { useState } from 'react';

export default function App() {
  const [text, setText] = useState('');

  const doSpeak = () => {
    Speech.speak(text);
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Type something..."
        value={text}
        onChangeText={text => setText(text)}
        style={styles.input}
      ></TextInput>
      <Pressable style={styles.pressable} onPress={doSpeak}>
        <Text style={styles.textPressable}>PRESS TO HEAR TEXT</Text>
      </Pressable>
      <StatusBar style="auto" />
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
    width: 300,
    padding: 20,
    borderWidth: 1,
    borderColor: 'grey',
  },
  pressable: {
    backgroundColor: '#338FFF',
    margin: 10,
  },
  textPressable: {
    padding: 10,
    color: '#FFF',
  },
});
