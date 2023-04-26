import { Text, View } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { Button } from '@rneui/themed';
import { useEffect, useState } from 'react';

export default function MapScreen({ navigation, route }) {
  const [response, setResponse] = useState({ lat: '', lng: '' });
  const [show, setShow] = useState(false);

  const { location } = route.params;
  const apiKey = 'XCvtBQ1r11KDojOJ3fnuD0RIkDjVQLUE';
  const url = `https://www.mapquestapi.com/geocoding/v1/address?key=${apiKey}&location=${location}`;

  /* Address to coords */
  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(res => {
        setResponse(res.results[0].locations[0].latLng);
      })
      .then(res => {
        console.log(response.lat);
        console.log(response.lng);
      })
      .catch(err => console.error(err));
  }, []);

  const locationToCoords = () => {
    fetch(url)
      .then(res => res.json())
      .then(res => {
        setResponse(res.results[0].locations[0].latLng);
      })
      .catch(err => console.error(err));
  };

  const testOnPress = () => {
    console.log(response.lat);
    console.log(response.lng);
  };

  /* Conditional rendering */
  if (response.lat && response.lng && show) {
    return (
      <View style={{ flex: 1 }}>
        <MapView
          style={{ width: '100%', height: '100%' }}
          initialRegion={{
            latitude: response.lat,
            longitude: response.lng,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        >
          <Marker
            style={{ width: '100%' }}
            coordinate={{
              latitude: response.lat,
              longitude: response.lng,
            }}
          />
        </MapView>
        <Button
          size="lg"
          style={{ position: 'absolute', bottom: 50, width: '100%' }}
          containerStyle={{ marginHorizontal: 10 }}
          raised
          icon={{ name: 'map', color: '#fff' }}
          title="SHOW"
          onPress={() => setShow(true)}
        />
      </View>
    );
  } else if (response.lat && response.lng) {
    return (
      <View style={{ flex: 1 }}>
        <MapView
          style={{ width: '100%', height: '100%' }}
          initialRegion={{
            latitude: response.lat,
            longitude: response.lng,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        ></MapView>
        <Button
          size="lg"
          style={{ position: 'absolute', bottom: 50, width: '100%' }}
          containerStyle={{ marginHorizontal: 10 }}
          raised
          icon={{ name: 'map', color: '#fff' }}
          title="SHOW"
          onPress={() => setShow(true)}
        />
      </View>
    );
  } else {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Loading...</Text>
      </View>
    );
  }
}
