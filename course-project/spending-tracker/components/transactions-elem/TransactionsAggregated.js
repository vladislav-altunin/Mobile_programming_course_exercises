import {
  Text,
  View,
  StyleSheet,
  SectionList,
  useWindowDimensions,
  Pressable,
  SafeAreaView,
} from 'react-native';
import React, { useState, useRef, useContext } from 'react';
import TRANSACTIONS_AGGREGATED from '../../data/TRANSACTIONS_AGGREGATED';
import TransactionsItem from './TransactionsItem';
import { useTheme } from 'react-native-paper';
import { baseStyles } from '../../styles/baseStyles';
import SectionSeparator from './SectionSeparator';
import SearchBar from '../SearchBar';

export default function TransactionsAggregated() {
  const { height, width } = useWindowDimensions();
  const theme = useTheme();
  const styles = createStyles(theme);

  return (
    //   {/* this container will shape the list */}
    <SafeAreaView
      style={[
        styles.container,
        { width: width, backgroundColor: theme.colors.surfaceVariant },
      ]}
      edges={['right', 'left', 'bottom']}
    >
      <View style={[styles.listContainer]}>
        <SectionList
          sections={TRANSACTIONS_AGGREGATED}
          keyExtractor={(item, index) => item + index}
          renderItem={({ item, index, section }) => (
            <TransactionsItem item={item} index={index} section={section} />
          )}
          renderSectionHeader={({ section: { title } }) => (
            <Text
              style={[
                baseStyles.listSectionTitle,
                { color: theme.colors.onBackground },
              ]}
            >
              {title}
            </Text>
          )}
          SectionSeparatorComponent={() => <SectionSeparator />}
          stickySectionHeadersEnabled={false}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </SafeAreaView>
  );
}

const createStyles = theme => {
  return StyleSheet.create({
    container: {
      flexGrow: 1,
    },
    listContainer: {
      flexGrow: 1,
      // minHeight: 2, // this MIGHT ensure "FlashList's rendered size IS usable (>2px)"
      //   backgroundColor: theme.colors.surface,
      // padding: 10, // add padding to see the container
      marginHorizontal: 10,
      marginBottom: 30,
      //   borderRadius: 15,
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
