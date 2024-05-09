import React, { useState, useRef } from 'react';
import { View, StyleSheet, useWindowDimensions } from 'react-native';

import { Text, IconButton, MD3Colors, useTheme } from 'react-native-paper';

export default function SliderItem({ item }) {
  const { height, width } = useWindowDimensions();
  const theme = useTheme();
  const styles = createStyles(theme);

  return (
    // its parent container has not colour
    <View style={[styles.container, { width }]}>
      {/* height of each SlideItem, adjust this first before adjusting its parts */}
      <View style={{ height: height * 0.5 }}>
        {/* this container allows to size SlideItem's individual view (its elements should be wrapped into another container) */}
        {/* { flex: 0.75 } */}
        <View style={[styles.sliderItemAccountBalanceParent, { flex: 0.75 }]}>
          {/* this container can be used to position elements inside the box */}
          <View style={styles.sliderItemAccountBalance}>
            <Text
              variant="titleSmall"
              style={{ color: theme.colors.onPrimaryContainer }}
            >
              {item.title}
            </Text>
            <Text
              variant="displaySmall"
              style={{ color: theme.colors.onPrimaryContainer }}
            >
              {item.balance}
            </Text>
          </View>
        </View>
        {/* this container allows to size SlideItem's individual view (its elements should be wrapped into another container) */}
        <View style={[styles.sliderItemAccountButtons, { flex: 0.2 }]}>
          {/* this view serve the purpose of positioning its child elements within its parent */}
          <View style={styles.iconButtonsContainer}>
            <View style={styles.iconButtonAndTextContainer}>
              <IconButton
                icon={item.icon_1}
                iconColor={theme.colors.onPrimaryContainer}
                containerColor={theme.colors.primaryContainer}
                size={item.icon_size}
                mode="contained"
                //onPress={() => console.log('Pressed')}
              />
              <Text style={{ color: theme.colors.onPrimaryContainer }}>
                {item.icon_title_1}
              </Text>
            </View>
            <View style={styles.iconButtonAndTextContainer}>
              <IconButton
                icon={item.icon_2}
                iconColor={theme.colors.onPrimaryContainer}
                containerColor={theme.colors.primaryContainer}
                size={item.icon_size}
                mode="contained"
                //onPress={() => console.log('Pressed')}
              />
              <Text style={{ color: theme.colors.onPrimaryContainer }}>
                {item.icon_title_2}
              </Text>
            </View>
            <View style={styles.iconButtonAndTextContainer}>
              <IconButton
                icon={item.icon_3}
                iconColor={theme.colors.onPrimaryContainer}
                containerColor={theme.colors.primaryContainer}
                size={item.icon_size}
                mode="contained"
                //onPress={() => console.log('Pressed')}
              />
              <Text style={{ color: theme.colors.onPrimaryContainer }}>
                {item.icon_title_3}
              </Text>
            </View>
            <View style={styles.iconButtonAndTextContainer}>
              <IconButton
                icon={item.icon_4}
                iconColor={theme.colors.onPrimaryContainer}
                containerColor={theme.colors.primaryContainer}
                size={item.icon_size}
                mode="contained"
                //onPress={() => console.log('Pressed')}
              />
              <Text style={{ color: theme.colors.onPrimaryContainer }}>
                {item.icon_title_4}
              </Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}

const createStyles = theme => {
  return StyleSheet.create({
    container: {
      flex: 1,
      // backgroundColor: 'gray',
      backgroundColor: theme.colors.primary,
      // alignItems: 'center',
      // justifyContent: 'center',
      paddingHorizontal: 10,
    },

    iconButtonsContainer: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center',
    },
    sliderItemAccountBalanceParent: {
      // backgroundColor: 'blue',
      flex: 0.75,
      justifyContent: 'center',
      alignItems: 'center',
    },
    sliderItemAccountBalance: {
      flexShrink: 1,
      justifyContent: 'center',
      alignItems: 'center',
      // backgroundColor: 'green',
    },
    sliderItemAccountButtons: {
      // backgroundColor: 'yellow',
    },
    iconButtonAndTextContainer: {
      justifyContent: 'center',
      alignItems: 'center',
      // backgroundColor: 'black',
    },
  });
};
