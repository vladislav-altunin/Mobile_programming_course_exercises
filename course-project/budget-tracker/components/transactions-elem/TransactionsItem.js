import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  useWindowDimensions,
  Pressable,
} from 'react-native';

import { Badge, Icon, IconButton, MD3Colors } from 'react-native-paper';
import { baseStyles } from '../../styles/baseStyles';
import { useTheme } from 'react-native-paper';

//passing index & section will help to style section container
export default function TransactionsItem({ item, index, sectionLength }) {
  const theme = useTheme();
  const styles = createStyles(theme);

  return (
    <View
      style={[
        styles.flatListItemContainer,
        index === 0 && styles.flatListItemContainerFirst,
        index === sectionLength - 1 && styles.flatListItemContainerLast,
      ]}
    >
      {/* this is the actual FlatListItem */}
      <View style={styles.flatListItemContentContainer}>
        <Pressable onPress={() => console.log('Pressable Pressed')}>
          {/* this view is needed to position the IconButton and the rest of pressable */}
          <View style={styles.flatListItemElements}>
            {/* IconButton */}
            <View style={{ flexShrink: 1 }}>
              <IconButton
                icon={item.icon}
                size={20}
                iconColor={theme.colors.onSecondary}
                containerColor={theme.colors.secondary}
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
                ←
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
                {item.title}
              </Text>
              <Text
                style={[
                  baseStyles.transactionsItemDescritptionFontSize,
                  { color: theme.colors.onSurface },
                ]}
              >
                {item.date}, {item.time}
              </Text>
              <Text
                style={[
                  baseStyles.transactionsItemDescritptionFontSize,
                  { color: theme.colors.onSurface },
                ]}
              >
                {item.message}
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

const createStyles = theme => {
  return StyleSheet.create({
    flatListItemContainer: {
      // flex: 1,
      // backgroundColor: 'blue',
      backgroundColor: theme.colors.surface,
      padding: 10,
      // borderColor: 'green',
      // borderWidth: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    flatListItemContainerFirst: {
      borderTopLeftRadius: 15,
      borderTopRightRadius: 15,
    },
    flatListItemContainerLast: {
      borderBottomLeftRadius: 15,
      borderBottomRightRadius: 15,
    },
    flatListItemContentContainer: {
      // flex: 1,
      // backgroundColor: 'pink',
      minWidth: '100%',
    },
    flatListItemElements: {
      // flex: 1,
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
};
