import React from 'react';
import { Text, View, StyleSheet, useWindowDimensions } from 'react-native';

import { IconButton, MD3Colors } from 'react-native-paper';

export default function SliderItem({ item }) {
  const { height, width } = useWindowDimensions();
  return (
    // its parent container has not colour
    <View style={[styles.container, { width }]}>
      {/* height of each SlideItem, adjust this first before adjusting its parts */}
      <View style={{ height: height * 0.5 }}>
        {/* this container allows to size SlideItem's individual view (its elements should be wrapped into another container) */}
        <View style={{ backgroundColor: 'blue', flex: 0.75 }}>
          {/* this container can be used to position elements inside the box */}
          <View style={styles.sliderItemAccountBalance}>
            <Text>{item.title}</Text>
            <Text>{item.balance}</Text>
          </View>
        </View>
        {/* this container allows to size SlideItem's individual view (its elements should be wrapped into another container) */}
        <View style={{ backgroundColor: 'yellow', flex: 0.2 }}>
          {/* this view serve the purpose of positioning its child elements within its parent */}
          <View style={styles.iconButtonsContainer}>
            <IconButton
              icon={item.icon_1}
              iconColor={MD3Colors.primary10}
              size={40}
              mode="contained"
              //onPress={() => console.log('Pressed')}
            />
            <IconButton
              icon={item.icon_2}
              iconColor={MD3Colors.primary10}
              size={40}
              mode="contained"
              //onPress={() => console.log('Pressed')}
            />
            <IconButton
              icon={item.icon_3}
              iconColor={MD3Colors.primary10}
              size={40}
              mode="contained"
              //onPress={() => console.log('Pressed')}
            />
            <IconButton
              icon={item.icon_4}
              iconColor={MD3Colors.primary10}
              size={40}
              mode="contained"
              //onPress={() => console.log('Pressed')}
            />
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'gray',
    // alignItems: 'center',
    // justifyContent: 'center',
  },

  iconButtonsContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },

  sliderItemAccountBalance: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
