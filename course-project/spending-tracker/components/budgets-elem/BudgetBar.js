import React, { useState, useRef } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ProgressBar, Text, useTheme } from 'react-native-paper';
//importing View from reac-native (not react-native-paper) prevents "Element type is invalid: expected a string" error
import { View } from 'react-native';

export default function BudgetBar(props) {
  let { ttl, dscLft, dscRgt, prgrNum } = props;
  const theme = useTheme();
  return (
    <View>
      {/* Header wrapper */}
      <View>
        {/* Title */}
        {/* April */}
        <Text>{ttl}</Text>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          {/* 0€ left to spend */}
          <Text>{dscLft}</Text>
          {/* This month */}
          <Text>{dscRgt}</Text>
        </View>
      </View>
      <ProgressBar
        progress={prgrNum}
        color={theme.colors.tertiary}
        style={{ height: 24, borderRadius: 12 }}
        fillStyle={{ borderRadius: 12 }}
      />
    </View>
  );
}
