import { Text, View, StyleSheet, FlatList } from 'react-native';
import React, { Component } from 'react';
import transactions from '../../../data/transactions';
import TransactionsItem from './TransactionsItem';

export default function Transactions() {
  return (
    // this container has not colour as it will always be overlapped by its child <TransactionsItem/>
    <View style={styles.container}>
      <FlatList
        data={transactions}
        renderItem={({ item }) => <TransactionsItem item={item} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
