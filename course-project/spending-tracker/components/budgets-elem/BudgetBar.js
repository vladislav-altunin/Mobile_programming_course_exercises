import React, { useState, useRef } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ProgressBar, Text, useTheme } from 'react-native-paper';
//importing View from reac-native (not react-native-paper) prevents "Element type is invalid: expected a string" error
import { View } from 'react-native';

export default function BudgetBar(props) {
  let { dscLft, dscRgt, prgrNum, prgrCol, prgrStyle, prgrFillStyle } = props;
  const theme = useTheme();
  return (
    <View>
      {/* Header wrapper */}
      <View>
        {/* Title */}
        {/* April */}
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          {/* 0€ left to spend */}
          <Text>{dscLft}</Text>
          {/* This month */}
          <Text>{dscRgt}</Text>
        </View>
      </View>
      <ProgressBar
        progress={prgrNum}
        color={prgrCol} //{theme.colors.tertiary}
        style={{ backgroundColor: prgrStyle, marginVertical: 5 }} //{{ height: 24, borderRadius: 12 }}
        fillStyle={prgrFillStyle} //{{ borderRadius: 12 }}
      />
    </View>
  );
}
