import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  useWindowDimensions,
  Pressable,
} from 'react-native';

import { Icon, IconButton, MD3Colors } from 'react-native-paper';

export default function TransactionsItem({ item }) {
  const { height, width } = useWindowDimensions();
  return (
    // see SliderItem and Slider to find out more about implementation of the views
    <View style={[styles.container, { width }]}>
      {/* this height can be decreased later */}
      <View style={{ height: height * 0.2 }}>
        {/* this is the actual FlatList */}
        <View style={styles.flatListContainer}>
          {/* this is the actual FlatListItem */}
          <View style={styles.flatListItemContainer}>
            <Pressable onPress={() => console.log('Pressable Pressed')}>
              {/* this view is needed to position the IconButton and the rest of pressable */}
              <View style={styles.flatListItemElements}>
                {/* IconButton */}
                <View>
                  <IconButton
                    icon={item.icon}
                    size={20}
                    iconColor={MD3Colors.primary30}
                    containerColor={MD3Colors.primary80}
                    mode="contained-tonal"
                    onPress={() => console.log('IconButton Pressed')}
                  />
                </View>
                {/* rest */}
                <View>
                  <Text>{item.title}</Text>
                  <Text>
                    {item.date}, {item.time}
                  </Text>
                  <Text>{item.message}</Text>
                  <Text>{item.message}</Text>
                  <Text>{item.message}</Text>
                  <Text>{item.message}</Text>
                </View>
              </View>
            </Pressable>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'green',
  },
  flatListContainer: {
    flex: 0.9, //0.9 of it's parent, which is flex: 0.2 of the total screen size
    backgroundColor: 'blue',
  },
  flatListItemContainer: {
    backgroundColor: 'pink',
  },
  flatListItemElements: {
    flexDirection: 'row',
    justifyContent: 'center',
    // alignItems: 'center',
  },
});
