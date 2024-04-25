import React, { useState, useRef } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { View, ScrollView } from 'react-native';
import { Button, Text, useTheme } from 'react-native-paper';
import ListItem from './ListItem';
import BudgetBar from './budgets-elem/BudgetBar';
import { baseStyles } from '../styles/baseStyles';

export default function Budgets() {
  const theme = useTheme();
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: theme.colors.surfaceVariant,
      }}
      edges={['right', 'left']}
    >
      <ScrollView
        style={{ backgroundColor: 'pink', padding: 5 }}
        contentContainerStyle={[
          { flex: 1 },
          baseStyles.generalHorizontalMargin,
        ]}
      >
        {/* 1/2 screen view */}
        <View style={{ flex: 1, backgroundColor: 'brown', padding: 1 }}>
          <BudgetBar
            ttl={'April'}
            dscLft={'0€ left'}
            dscRgt={'of 300 €'}
            prgrNum={0.5}
          />
        </View>
        {/* 2/2 screen view */}
        <View style={{ flex: 1, backgroundColor: 'white', padding: 1 }}>
          <View
            style={{
              flex: 1,
              backgroundColor: 'grey',
              margin: 1,
            }}
          >
            <ListItem
              itmIcon={'camera'}
              icnCol={theme.colors.onSecondary}
              cntCol={theme.colors.secondary}
              bdgCol={theme.colors.onPrimaryContainer}
              bdgBgCol={theme.colors.onSecondaryContainer}
              ttlCol={theme.colors.onBackground}
              itmTtl={'Spent this month'}
              itmDate={'26. March'}
              itmTime={'10.55'}
              datTimeCol={theme.colors.onSurface}
              msgCol={theme.colors.onSurface}
              itmAmt={'0'}
              amtCol={theme.colors.onSurface}
            />
          </View>
          {/* 25% of the screen, contains the add container that should be 12.5% */}
          <View
            style={{
              flex: 1,
              justifyContent: 'space-between',
              backgroundColor: 'grey',
              margin: 1,
            }}
          >
            {/* Button container (not wrapper!) - 12.5% of the screen */}
            <View style={{ flex: 1, backgroundColor: 'green' }}>
              {/* Button wrapper View to fix button's container width (otherwise takes 100%) */}
              <View
                style={{
                  flexDirection: 'row',
                  alignSelf: 'center',
                }}
              >
                <Button
                  mode="contained"
                  compact="true"
                  contentStyle={{
                    // height: 36,
                    paddingLeft: 3,
                    paddingRight: 3,
                    // backgroundColor: theme.colors.primaryContainer,
                  }}
                  labelStyle={{
                    // marginTop: 0,
                    // marginLeft: 1,
                    // marginBottom: 0,
                    // lineHeight: 36,
                    color: theme.colors.onPrimaryContainer,
                  }}
                >
                  Set Budget
                </Button>
              </View>
            </View>
            {/* Add container - 12.5% */}
            <View style={{ flex: 1, backgroundColor: 'blue' }}>
              <Text>Add container</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
