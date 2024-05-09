import { StyleSheet, Text, View, Dimensions } from 'react-native';
import React, { useCallback, useEffect, useImperativeHandle } from 'react';

/*Bottom Sheet imports*/
import { Gesture, GestureDetector } from 'react-native-gesture-handler';

import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
  withSpring,
  withClamp,
  useAnimatedProps,
} from 'react-native-reanimated';
/* *** */

const SPRING_CONFIG = {
  damping: 50,
  // overshootClamping: true,
  // restDisplacementThreshold: 0.1,
  // restSpeedThreshold: 0.1,
  // stiffness: 500,
};

const { height: SCREEN_HEIGHT } = Dimensions.get('window');
const MAX_TRANSLATE_Y = -SCREEN_HEIGHT + 50;

//in order to use ref outside, the BottomSheet should be implemented as a React.forwardRef component
const BottomSheet = React.forwardRef(({ children }, ref) => {
  // let { showBottomSheet } = props;

  // useEffect(() => {
  //   if (showBottomSheet) {
  //     onPressNew();
  //   }
  // }, [showBottomSheet]);

  //Animated style reuiqres using sharedValue and top: dimensions.heigh can't be assigned directly
  const trnsltY = useSharedValue(0);

  const scrollTo = useCallback(destination => {
    //'worklet' keyword is required, otherwise "ReanimatedError: [Reanimated] Tried to synchronously call a non-worklet function on the UI thread."
    'worklet';
    trnsltY.value = withSpring(destination, SPRING_CONFIG);
  }, []);

  //This binds scrollTo() method to the ref
  useImperativeHandle(ref, () => ({ scrollTo, MAX_TRANSLATE_Y }), [
    scrollTo,
    MAX_TRANSLATE_Y,
  ]);

  const context = useSharedValue({ y: 0 });
  // console.log(context.value);

  const onPressNew = () => {
    trnsltY.value = withSpring(MAX_TRANSLATE_Y, SPRING_CONFIG);
  };

  const pan = Gesture.Pan()
    .onStart(() => {
      context.value = { y: trnsltY.value };
    })
    .onUpdate(event => {
      trnsltY.value = event.translationY + context.value.y;
      trnsltY.value = Math.max(trnsltY.value, MAX_TRANSLATE_Y);
    })
    .onEnd(() => {
      if (trnsltY.value > -SCREEN_HEIGHT / 1.45) {
        scrollTo(0);
      } else if (trnsltY.value < -SCREEN_HEIGHT / 1.45) {
        scrollTo(MAX_TRANSLATE_Y);
      }
    });

  //useAnimatedStyle is a function that returns animated styles based on shared values
  const animatedStyles = useAnimatedStyle(() => {
    return {
      // top: top.value, // as this cannot be used directly see useAnimatedStyle implementation (the value will be dynamic)
      transform: [{ translateY: trnsltY.value }],
    };
  });

  return (
    <GestureDetector gesture={pan}>
      <Animated.View style={[styles.sheet, animatedStyles]}>
        <View style={styles.line} />
        {/* this allows to nest something inside the BottomSheet component */}
        {children}
      </Animated.View>
    </GestureDetector>
  );
});

export default BottomSheet;

const styles = StyleSheet.create({
  sheet: {
    height: SCREEN_HEIGHT,
    top: SCREEN_HEIGHT,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    width: '100%',
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
  },
  line: {
    width: 75,
    height: 4,
    backgroundColor: 'grey',
    alignSelf: 'center',
    marginVertical: 15,
    borderRadius: 2,
  },
});
