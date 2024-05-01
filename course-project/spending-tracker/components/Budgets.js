import React, { useState, useRef } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import {
  View,
  ScrollView,
  StyleSheet,
  useWindowDimensions,
} from 'react-native';
import { Button, Text, useTheme } from 'react-native-paper';
import ListItem from './ListItem';
import BudgetBar from './budgets-elem/BudgetBar';
import { baseStyles } from '../styles/baseStyles';
import {
  BannerAd,
  BannerAdSize,
  TestIds,
} from 'react-native-google-mobile-ads';

export default function Budgets() {
  const { height, width } = useWindowDimensions();
  const theme = useTheme();
  const styles = createStyles(theme);
  const itmAmtTest = '0 of 300';

  return (
    <SafeAreaView
      style={[
        styles.container,
        { width: width, backgroundColor: theme.colors.surfaceVariant },
      ]}
      edges={['right', 'left']}
    >
      <View style={styles.contentContainer}>
        <View style={styles.listItemContainer}>
          <ListItem
            index={0}
            sectionLength={1}
            itmIcon={''}
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
            itmAmt={itmAmtTest}
            amtCol={theme.colors.onSurface}
            bgtBar={true}
            bgtBarPrgrNum={0.5}
            bgtBarPrgrCol={theme.colors.tertiary}
            bgtBarPrgrStyle={theme.colors.tertiaryContainer}
          />
        </View>
        {/* 25% of the screen, contains the add container that should be 12.5% */}
        <View style={styles.buttonContainer}>
          {/* Button wrapper (not container!) View to fix button's container width (otherwise takes 100%) */}
          <View style={styles.buttonWrapper}>
            <Button
              mode="contained"
              compact="true"
              contentStyle={{
                // height: 36,
                paddingLeft: 3,
                paddingRight: 3,
                backgroundColor: theme.colors.tertiary,
              }}
              labelStyle={{
                // marginTop: 0,
                // marginLeft: 1,
                // marginBottom: 0,
                // lineHeight: 36,
                color: theme.colors.onPrimaryContainer,
              }}
            >
              {itmAmtTest ? 'Reset Budget' : 'Set Budget'}
            </Button>
          </View>
        </View>
      </View>
      <View style={styles.adContainer}>
        <BannerAd
          unitId={TestIds.BANNER}
          size={BannerAdSize.LARGE_BANNER}
          requestOptions={{
            requestNonPersonalizedAdsOnly: true,
          }}
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
    contentContainer: {
      flexGrow: 1,
      // minHeight: 2, // this MIGHT ensure "FlashList's rendered size IS usable (>2px)"
      //   backgroundColor: theme.colors.surface,
      // padding: 10, // add padding to see the container
      margin: 10,
      // marginBottom: 30,
      // borderRadius: 15,
    },
    listItemContainer: {
      flex: 1,
      // backgroundColor: 'grey', // helper
      // margin: 1, // helper
    },
    buttonContainer: {
      // not wrapper!
      flex: 1,
      justifyContent: 'center',
      // backgroundColor: 'grey', // helper
      // margin: 1, // helper
    },
    buttonWrapper: {
      // not container!
      flexDirection: 'row',
      alignSelf: 'center',
    },
    adContainer: {
      // backgroundColor: 'blue',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'relative',
    },
  });
};
