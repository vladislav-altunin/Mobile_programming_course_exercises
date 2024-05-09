import React, { useState, useCallback, useRef, Children } from 'react';
import { Text, View, StyleSheet, ScrollView, Animated } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import TopFuncBar from './TopFuncBar';
import Slider from './home-elem/carousel/Slider';
import Transactions from './home-elem/trnsactions/Transactions';
import { TransactionsContext } from '../contexts/TransactionsContext';
import { useTheme } from 'react-native-paper';
import BiColorBackdrop from './home-elem/BiColorBackdrop';
import BottomSheet from './home-elem/new-transaction/BottomSheet';
// import * as SystemUI from 'expo-system-ui';

export default function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showBottomSheet, setShowBottomSheet] = useState(false);
  const ref = useRef(null);
  const openBottomSheet = useCallback(() => {
    ref?.current?.scrollTo(ref?.current.MAX_TRANSLATE_Y);
  }, []);
  const theme = useTheme();
  // SystemUI.setBackgroundColorAsync('red');
  return (
    <SafeAreaView style={{ flex: 1 }} edges={['right', 'left', 'top']}>
      <TopFuncBar onPressNew={openBottomSheet} />
      {/* this ensures "FlashList's rendered size IS usable (>2px) in <Transactions /> -> <FlashList />" */}
      {/* contentContainerStyle={{ flexShrink: 1 }} */}
      <BiColorBackdrop style={{ flex: 1 }}>
        <ScrollView style={{ flex: 1 }}>
          <TransactionsContext.Provider
            value={{ currentIndex, setCurrentIndex }}
          >
            <Slider />
            <Transactions />
          </TransactionsContext.Provider>
        </ScrollView>
        <BottomSheet ref={ref} showBottomSheet={showBottomSheet}>
          <View style={{ flex: 1, backgroundColor: 'orange' }}></View>
        </BottomSheet>
      </BiColorBackdrop>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, // this solves the problem of a flat list inside a scroll view
  },
});
