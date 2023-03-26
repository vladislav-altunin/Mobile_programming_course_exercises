import React, { useState, useEffect } from 'react';
import {
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import MapView, { Marker } from 'react-native-maps';

export default function App() {
  const [address, setAddress] = useState('');
  const [tag, setTag] = useState('');
  const [search, setSearch] = useState(false);
  const [response, setResponse] = useState({
    displayLatLng: {
      lat: 60.1699,
      lng: 24.9384,
    },
  });
  const [region, setRegion] = useState({
    latitude: 60.192,
    longitude: 24.9458,
    latitudeDelta: 0.0322,
    longitudeDelta: 0.0221,
  });

  //On press
  const showAddress = addressValue => {
    setSearch(true);
    setTag(addressValue);
    fetch(
      `https://www.mapquestapi.com/geocoding/v1/address?key=XCvtBQ1r11KDojOJ3fnuD0RIkDjVQLUE&location=${addressValue}`
    )
      .then(response => response.json())
      .then(response => {
        setResponse(response.results[0].locations[0]);
      })
      .catch(e => console.log(e));
    setAddress('');
  };

  //Response
  useEffect(() => {
    console.log(`This is SECOND render: ${response}`);
    setRegion({
      ...region,
      latitude: response.displayLatLng.lat,
      longitude: response.displayLatLng.lng,
      latitudeDelta: 0.0322,
      longitudeDelta: 0.0221,
    });
  }, [response]);

  //Render
  if (!search) {
    return (
      <SafeAreaView style={styles.safeArea}>
        <View>
          <MapView style={styles.mapViev} region={region}>
            <TextInput
              placeholder="Enter address"
              style={styles.testInput}
              value={address}
              onChangeText={input => setAddress(input)}
            />
            <Pressable
              onPress={() => {
                showAddress(address);
              }}
              style={styles.pressable}
            >
              <Text style={styles.text}>Search</Text>
            </Pressable>
          </MapView>
        </View>
      </SafeAreaView>
    );
  } else {
    return (
      <SafeAreaView style={styles.safeArea}>
        <View>
          <MapView style={styles.mapViev} region={region}>
            <Marker
              style={{ width: '100%' }}
              coordinate={{
                latitude: region.latitude,
                longitude: region.longitude,
              }}
              title={tag}
            />
            <TextInput
              placeholder="Enter address"
              style={styles.testInput}
              value={address}
              onChangeText={input => setAddress(input)}
            />
            <Pressable
              onPress={() => {
                showAddress(address);
              }}
              style={styles.pressable}
            >
              <Text style={styles.text}>Search</Text>
            </Pressable>
          </MapView>
        </View>
      </SafeAreaView>
    );
  }
}

//Styles
const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: 'white',
  },
  mapViev: {
    height: '100%',
  },
  pressable: {
    flex: 0,
    height: 75,
    backgroundColor: '#2196f3',
    position: 'absolute',
    bottom: 0,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: 'white',
    borderWidth: 1,
  },
  text: {
    flex: 0,
    fontSize: 20,
    fontWeight: '700',
    color: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  testInput: {
    flex: 0,
    height: 50,
    fontSize: 25,
    padding: 10,
    backgroundColor: 'white',
    borderBottomColor: 'grey',
    borderBottomWidth: 3,
    width: '100%',
    position: 'absolute',
    bottom: 75,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
