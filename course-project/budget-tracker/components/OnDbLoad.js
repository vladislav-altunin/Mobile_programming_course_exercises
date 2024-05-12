import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

const OnDbLoad = () => {
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        alignContent: 'center',
        backgroundColor: 'red',
      }}
    >
      <Text>Loading Database...</Text>
    </View>
  );
};

export default OnDbLoad;

const styles = StyleSheet.create({});
