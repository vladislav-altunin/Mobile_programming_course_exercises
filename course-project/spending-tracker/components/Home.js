import React, { useState, useRef } from 'react';
import { Text, View, StyleSheet, ScrollView, Animated } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import TopFuncBar from './home-elem/TopFuncBar';
import Slider from './home-elem/carousel/Slider';
import Transactions from './home-elem/trnsactions/Transactions';
import { TransactionsContext } from '../contexts/TransactionsContext';
import { color } from '@rneui/base';
import { useTheme } from 'react-native-paper';

export default function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const theme = useTheme();
  return (
    <SafeAreaView
      style={{ flex: 1, backgroundColor: theme.colors.background }}
      edges={['right', 'left', 'top']}
    >
      <TopFuncBar />
      {/* this ensures "FlashList's rendered size IS usable (>2px) in <Transactions /> -> <FlashList />" */}
      {/* contentContainerStyle={{ flexShrink: 1 }} */}
      <ScrollView>
        <View style={styles.container}>
          <TransactionsContext.Provider
            value={{ currentIndex, setCurrentIndex }}
          >
            <Slider />
            <Transactions />
          </TransactionsContext.Provider>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, // this solves the problem of a flat list inside a scroll view
  },
});
