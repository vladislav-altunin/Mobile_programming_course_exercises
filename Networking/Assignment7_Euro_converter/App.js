import { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image, TextInput, Alert, Pressable } from 'react-native';
import {Picker} from '@react-native-picker/picker';

export default function App() {
  const [result, setResult] = useState();
  const [amount, setAmount] = useState('');
  const [convertTo, setConvertTo] = useState('EUR');
  const [currencyList, setCurrencyList] = useState([]);
  const [testCurrencyList, setTestCurrenyList] = useState(["AUD", "GBP", "EUR", "USD"]);
  const [selectedCurrency, setSelectedCurrency] = useState(testCurrencyList[0]);

  /* API headers for all requests */
  const apiHeaders = new Headers();
  apiHeaders.append("apikey", "GrXJtuyDd2pR242iDsFZLeIoBgeJUbe4");

  const apiRequestOptions = {
    method: 'GET',
    redirect: 'follow',
    headers: apiHeaders
  };
  /* End of API headers for all requests */

  /*Getting a list of symbols */


  fetch("https://api.apilayer.com/exchangerates_data/symbols", apiRequestOptions)
  .then(response => response.json())
  .then(response => {
    if(response.success) {
      setCurrencyList(Object.keys(response.symbols));
    }
  })
  .catch(error => Alert.alert('error', error));
  /* End of getting list of symbols */

  /* Converting currencies */
  const convertToEur = () => {
    fetch(`https://api.apilayer.com/exchangerates_data/convert?to=${convertTo}&from=${selectedCurrency}&amount=${amount}`, apiRequestOptions)
    .then(response => response.json())
    .then(response => {
      if(response.success) {
        setAmount(response.result);
      }
    })
    .catch(error => console.log('error', error));
  }

  /* End converting currencies */

  /* Imulating conversion when API request limit is reached */
  const showConversion = () => {
    Alert.alert(`You have converted ${amount} ${selectedCurrency} to ${convertTo}`);
  }
  /* End of imulating conversion when API requst limit is reached */

  return (
    <View style={styles.container}>
      <View style={styles.resultView}>
        <Image 
          source={require('./assets/euro-coins.jpg')}
          style={styles.image}
        />
        <Text style={styles.resultText}>{result}</Text>
      </View>
      <View style={styles.inputView}>
        <TextInput 
          style={styles.inputField}
          onChangeText={text => setAmount(text)}
        >
          
        </TextInput>
        <Picker
          style={styles.picker}
          selectedValue={selectedCurrency}
          onValueChange={(itemValue, itemIndex) => setSelectedCurrency(itemValue)}
        >
          {testCurrencyList.map((item, index) => {
            return (<Picker.Item label={item} value={item} key={index}/>)
          })}
        </Picker>
      </View>
      <View style={styles.buttonView}>
          <Pressable 
            style={styles.button}
            onPress={showConversion}
          >
            <Text style={styles.buttonText}>Convert</Text>
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

  resultView: {
    flex: 0,
    alignItems: 'center',
    justifyContent: 'center',
  },

  resultText: {
    fontSize: 30,
  },

  image: {
    width: 300,
    height: 180,
  },

  inputView: {
    flex: 0,
    flexDirection: 'row',
    alignItems: 'center',
  },

  inputField: {
    flex: 1/4,
    height: 30,
    fontSize: 25,
    borderBottomColor: 'grey',
    borderBottomWidth: 1,
  },

  picker: {
    flex: 1.25/4,
  },

  buttonView: {

  },

  button: {
    
  },

  buttonText: {
    fontSize: 20,
    fontWeight: 'bold',
    backgroundColor: '#338FFF',
    color: 'white',
    padding: 10,
    marginTop: 10,
    marginBottom: 30,
    marginHorizontal: 5,
  },

});
