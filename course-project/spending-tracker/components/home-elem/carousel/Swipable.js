import { View, Text } from 'react-native';
import React from 'react';

export default function Swipable() {
  return (
    <View style={{ flex: 1 }}>
      <View style={{ backgroundColor: 'gray', flex: 0.5 }}></View>
      <View style={{ backgroundColor: 'blue', flex: 0.5 }}></View>
    </View>
  );
}
