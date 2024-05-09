import React, { useState, useRef, useContext } from 'react';
import { Text, View, FlatList, StyleSheet, Animated } from 'react-native';
import accounts from '../../../data/accounts';
import SliderItem from './SliderItem';
import Paginator from './Paginator';
import { TransactionsContext } from '../../../contexts/TransactionsContext';

export default function Slider() {
  //State to hold currently viewed index
  // const [currentIndex, setCurrentIndex] = useState(0);
  const { currentIndex, setCurrentIndex } = useContext(TransactionsContext);
  //Reference to an animated value
  const scrollX = useRef(new Animated.Value(0)).current;
  //The ref of the FlatList to itself
  const slidesRef = useRef(null);
  //Setting the refference whnever the FlatList scrolls and moves onto the next slide
  const viewableItemsChanged = useRef(({ viewableItems }) => {
    setCurrentIndex(viewableItems[0].index);
  }).current;
  //This tells that the next slide should be at least 50% of the screen before if will change
  const viewConfig = useRef({ viewAreaCoveragePercentThreshold: 50 }).current;
  return (
    <View style={styles.container}>
      {console.log(currentIndex)}
      <FlatList
        data={accounts}
        renderItem={({ item }) => <SliderItem item={item} />}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        bounces={false}
        keyExtractor={item => item.id}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX } } }],
          { useNativeDriver: false }
        )}
        scrollEventThrottle={32}
        onViewableItemsChanged={viewableItemsChanged}
        viewabilityConfig={viewConfig}
        ref={slidesRef}
      />
      <Paginator data={accounts} scrollX={scrollX} />
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
