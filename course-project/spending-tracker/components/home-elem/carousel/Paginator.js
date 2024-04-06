import { Animated, StyleSheet, useWindowDimensions, View } from 'react-native';
import React from 'react';
import { useTheme } from 'react-native-paper';

export default function Paginator({ data, scrollX }) {
  const { width } = useWindowDimensions();
  const theme = useTheme();
  return (
    <View style={[styles.container]}>
      {data.map((_, i) => {
        //these correspond to prev dot, current dot, and next dot
        const inputRange = [(i - 1) * width, i * width, (i + 1) * width];
        //width, height, borderRadius, color and opacity of the corresponding dots
        const dotWidth = scrollX.interpolate({
          inputRange,
          outputRange: [5, 6, 5],
        });
        //
        const dotHeight = scrollX.interpolate({
          inputRange,
          outputRange: [5, 6, 5],
        });
        //
        const dotRadius = scrollX.interpolate({
          inputRange,
          outputRange: [2.5, 3, 2.5],
        });
        //
        const dotColor = scrollX.interpolate({
          inputRange,
          outputRange: [
            theme.colors.primaryContainer,
            theme.colors.onPrimaryContainer,
            theme.colors.primaryContainer,
          ],
        });
        //
        const dotOpacity = scrollX.interpolate({
          inputRange,
          outputRange: [0.3, 1, 0.3],
        });
        return (
          <Animated.View
            style={[
              styles.dot,
              {
                width: dotWidth,
                height: dotHeight,
                borderRadius: dotRadius,
                backgroundColor: dotColor,
                opacity: dotOpacity,
              },
            ]}
            key={i.toString()}
          />
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    // height: 64,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: 'pink',
    position: 'absolute',
    top: 20,
  },
  dot: {
    marginHorizontal: 4,
  },
});
