import { StyleSheet, Text, View, useWindowDimensions } from 'react-native';
import React from 'react';

/*Bottom Sheet imports*/
import { Gesture, GestureDetector } from 'react-native-gesture-handler';

import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
  withSpring,
} from 'react-native-reanimated';
/* *** */

export default function BottomSheet() {
  const dimentions = useWindowDimensions();
  const pressed = useSharedValue(false);

  const offset = useSharedValue(0);

  const pan = Gesture.Pan()
    .onBegin(() => {
      pressed.value = true;
    })
    .onChange(event => {
      offset.value = event.translationX;
    })
    .onFinalize(() => {
      offset.value = withSpring(0);
      pressed.value = false;
    });

  const animatedStyles = useAnimatedStyle(() => ({
    transform: [
      { translateX: offset.value },
      { scale: withTiming(pressed.value ? 1.2 : 1) },
    ],
    backgroundColor: pressed.value ? '#FFE04B' : '#b58df1',
    // top: dimentions.height * 0.4,
  }));

  return (
    <GestureDetector gesture={pan}>
      <Animated.View style={[styles.sheet, animatedStyles]}></Animated.View>
    </GestureDetector>
  );
}

const styles = StyleSheet.create({
  sheet: {
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    position: 'absolute',
    bottom: 0,
    right: 0,
    left: 0,
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
