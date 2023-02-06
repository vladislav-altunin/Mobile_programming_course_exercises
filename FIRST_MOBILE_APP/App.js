import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Alert, TextInput } from 'react-native';

export default function App() {
  const [msg, setMsg] = React.useState('');

  const buttonPress = () => {
    Alert.alert('Hello', 'You typed: ' + msg);
  }

  return (
    <View style={styles.container}>
      <TextInput 
        style={styles.inputStyle}
        value={msg}
        onChangeText={text => setMsg(text)}
      />
      <Button onPress={buttonPress} title="Press me"/>
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

  inputStyle: {
    width: 200, 
    borderColor: 'blue', 
    borderWidth: 1,
  }
});
