import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import { useTheme } from 'react-native-paper';

export default function BiColorBackdrop({ children }) {
  const theme = useTheme();
  return (
    <View style={[{ position: 'relative' }, { flex: 1 }]}>
      {children}
      <View style={styles.biColorContainer}>
        <View style={{ flex: 1, backgroundColor: theme.colors.background }} />
        <View
          style={{ flex: 1, backgroundColor: theme.colors.surfaceVariant }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  biColorContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    zIndex: -1, // appear under the scrollview
  },
});
