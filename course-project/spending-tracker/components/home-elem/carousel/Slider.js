import React, { useState, useRef } from 'react';
import { Text, View, FlatList, StyleSheet } from 'react-native';
import accounts from '../../../data/accounts';
import SliderItem from './SliderItem';

export default function Slider() {
  return (
    <View style={styles.container}>
      <FlatList
        data={accounts}
        renderItem={({ item }) => <SliderItem item={item} />}
        horizontal
        pagingEnabled
        bounces={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
