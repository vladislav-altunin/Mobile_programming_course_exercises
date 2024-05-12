import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  useWindowDimensions,
  Pressable,
} from 'react-native';

import { Badge, Icon, IconButton, MD3Colors } from 'react-native-paper';
import { baseStyles } from '../../../styles/baseStyles';
import { useTheme } from 'react-native-paper';
import { categoryIcons } from '../../../constants/icons';

export default function TransactionsItem({ item, index, categories }) {
  //helper vars
  const theme = useTheme();
  const category = categories[item.category_id - 1].name;
  const badge = item.type === 'Income' ? '←' : '→';
  const iconContainerColor =
    item.type === 'Income' ? theme.colors.secondary : theme.colors.tertiary;
  const iconName = categoryIcons[category];
  return (
    <View style={styles.flatListItemContainer}>
      {/* this is the actual FlatListItem */}
      <View style={styles.flatListItemContentContainer}>
        <Pressable onPress={() => console.log('Pressable Pressed')}>
          {/* this view is needed to position the IconButton and the rest of pressable */}
          <View style={styles.flatListItemElements}>
            {/* IconButton */}
            <View style={{ flexShrink: 1 }}>
              <IconButton
                icon={iconName} //alpha-w-box
                size={35}
                iconColor={theme.colors.onSecondary}
                containerColor={iconContainerColor}
                mode="contained-tonal"
                onPress={() => console.log('IconButton Pressed')}
              />
              <Badge
                style={[
                  styles.badge,
                  {
                    backgroundColor: theme.colors.onSecondaryContainer,
                    color: theme.colors.onPrimaryContainer,
                  },
                ]}
                size={15}
              >
                {badge}
              </Badge>
            </View>
            {/* rest */}
            <View style={styles.flatListItemTextElements}>
              <Text
                style={[
                  baseStyles.transactionsItemTitleFontSize,
                  { color: theme.colors.onBackground },
                ]}
              >
                {/* {console.log(item.category_id - 1)} */}
                {console.log(categories)}
                {category}
              </Text>
              <Text
                style={[
                  baseStyles.transactionsItemDescritptionFontSize,
                  { color: theme.colors.onSurface },
                ]}
              >
                {item.date}
              </Text>
              <Text
                style={[
                  baseStyles.transactionsItemDescritptionFontSize,
                  { color: theme.colors.onSurface },
                ]}
              >
                {item.description}
              </Text>
            </View>
            <View>
              <Text
                style={[
                  baseStyles.transactionsItemDescritptionFontSize,
                  { color: theme.colors.onSurface },
                ]}
              >
                {item.amount}
              </Text>
            </View>
          </View>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  flatListItemContainer: {
    flex: 1,
    // backgroundColor: 'blue',
    padding: 10,
    // borderColor: 'green',
    // borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  flatListItemContentContainer: {
    flex: 1,
    // backgroundColor: 'pink',
    minWidth: '100%',
  },
  flatListItemElements: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-start',
    columnGap: 5,
    padding: 5,
  },
  flatListItemTextElements: {
    flex: 1, //this way text doesn't overlap flatListItemContainer
  },
  badge: {
    position: 'absolute',
    margin: 0,
    padding: 0,
    bottom: 4,
    right: 4,
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 8,
  },
});
