import {
  Text,
  View,
  StyleSheet,
  FlatList,
  useWindowDimensions,
  Pressable,
} from 'react-native';
import React, { useState, useRef, useContext, useEffect } from 'react';
import transactions from '../../../data/transactions';
import TransactionsItem from './TransactionsItem';
import { TransactionsContext } from '../../../contexts/TransactionsContext';
import { useTheme } from 'react-native-paper';
import { baseStyles } from '../../../styles/baseStyles';

import { useSQLiteContext } from 'expo-sqlite/next';

export default function Transactions() {
  const [transactions, setTransactions] = useState([]);
  const [categories, setCategories] = useState([]);
  const { height, width } = useWindowDimensions();
  const { currentIndex, setCurrentIndex } = useContext(TransactionsContext);
  const theme = useTheme();
  const styles = createStyles(theme);

  const dbInstance = useSQLiteContext();

  useEffect(() => {
    dbInstance.withTransactionAsync(async () => {
      await getAllTransactionsAndCategoriesAsync();
    });
  }, [dbInstance]);

  async function getAllTransactionsAndCategoriesAsync() {
    const cts = await dbInstance.getAllAsync(`SELECT * FROM Categories;`);
    setCategories(cts);
    console.log(`CATEGORIES SET ${categories}`);

    const trs = await dbInstance.getAllAsync(
      `SELECT * FROM Transactions WHERE (category_id = ?) ORDER BY date DESC;`,
      [9]
    );
    setTransactions(trs);
    console.log(`TRANSACTIONS SET ${transactions}`);
  }

  async function deleteTransactionAsync(id) {
    dbInstance.withTransactionAsync(async () => {
      await dbInstance.runAsync(`DELETE FROM Transactions WHERE id = ?;`, [id]);
      //remember to reload data
      await getAllTransactionsAndCategoriesAsync();
    });
  }

  return (
    // this container will shape the list
    <View
      style={[
        styles.container,
        { width: width, backgroundColor: theme.colors.surfaceVariant },
      ]}
    >
      {/* {console.log(transactions)}
      {console.log(categories)} */}
      {console.log(`Current index in Transactions.js ${currentIndex}`)}
      <View style={[styles.listContainer]}>
        <FlatList
          // data={transactions[currentIndex]}
          data={transactions}
          renderItem={({ item, index }) => (
            <TransactionsItem
              item={item}
              index={index}
              categories={categories}
            />
          )}
          estimatedItemSize={171} // fix the size later
          scrollEnabled={false} // this solves the problem of a flat list inside a scroll view
          initialNumToRender={3}
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
      // padding: 10, // add padding to see the container
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
