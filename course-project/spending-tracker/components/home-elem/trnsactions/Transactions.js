import {
  Text,
  View,
  StyleSheet,
  FlatList,
  useWindowDimensions,
  Pressable,
} from 'react-native';
import { FlashList } from '@shopify/flash-list';
import React, { useState, useRef, useContext } from 'react';
import transactions from '../../../data/transactions';
import TransactionsItem from './TransactionsItem';
import { TransactionsContext } from '../../../contexts/TransactionsContext';
import { useTheme } from 'react-native-paper';
import { baseStyles } from '../../../styles/baseStyles';

export default function Transactions() {
  const { height, width } = useWindowDimensions();
  const { currentIndex, setCurrentIndex } = useContext(TransactionsContext);
  const theme = useTheme();
  const styles = createStyles(theme);

  return (
    // this container will shape the list
    <View
      style={[
        styles.container,
        { width: width, backgroundColor: theme.colors.surfaceVariant },
      ]}
    >
      <View style={[styles.listContainer]}>
        <FlatList
          data={transactions[currentIndex]}
          renderItem={({ item }) => <TransactionsItem item={item} />}
          estimatedItemSize={171} // fix the size later
          scrollEnabled={false} // this solves the problem of a flat list inside a scroll view
        />
        <View style={styles.containerPressable}>
          <Pressable style={styles.pressable}>
            <Text
              style={[
                baseStyles.listPressableText,
                {
                  color: theme.colors.onSurfaceVariant,
                },
              ]}
            >
              Show all
            </Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
}

const createStyles = theme => {
  return StyleSheet.create({
    container: {
      flex: 1,
    },
    listContainer: {
      flex: 1,
      // minHeight: 2, // this MIGHT ensure "FlashList's rendered size IS usable (>2px)"
      backgroundColor: theme.colors.surface,
      padding: 10, // add padding to see the container
      marginHorizontal: 10,
      marginTop: -10,
      marginBottom: 30,
      borderRadius: 15,
    },
    containerPressable: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    pressable: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      marginVertical: 10,
    },
  });
};
