import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  useWindowDimensions,
  Pressable,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Badge, Icon, IconButton, MD3Colors } from 'react-native-paper';
import { baseStyles } from '../styles/baseStyles';
import { useTheme } from 'react-native-paper';

import BudgetBar from './budgets-elem/BudgetBar';

export default function ListItem(props) {
  const theme = useTheme();
  const styles = createStyles(theme);
  let {
    item,
    index,
    sectionLength,
    itmIcon,
    icnCol,
    cntCol,
    bdgCol,
    bdgBgCol,
    ttlCol,
    itmTtl,
    itmDate,
    itmTime,
    datTimeCol,
    itmMsg,
    msgCol,
    itmAmt,
    amtCol,
    bgtBar,
    bgtBarDscLft,
    bgtBarDscRgt,
    bgtBarPrgrNum,
    bgtBarPrgrCol,
    bgtBarPrgrStyle,
    bgtBarPrgrFillStyle,
  } = props;
  return (
    <View
      style={[
        styles.flatListItemContainer,
        index === 0 && styles.flatListItemContainerFirst,
        index === sectionLength - 1 && styles.flatListItemContainerLast,
      ]}
    >
      <View style={styles.flatListItemContentContainer}>
        <Pressable onPress={() => console.log('Pressable Pressed')}>
          {/* this view is needed to position the IconButton and the rest of pressable */}
          <View style={styles.flatListItemElements}>
            {/* IconButton */}
            {/* If Icon string is not empty -> render icon, otherwise empty fragment (ie for budgets tab)*/}
            {itmIcon ? (
              <View style={{ flexShrink: 1 }}>
                <IconButton
                  icon={itmIcon} //item.icon
                  size={20}
                  iconColor={icnCol} //{theme.colors.onSecondary}
                  containerColor={cntCol} //theme.colors.secondary
                  mode="contained-tonal"
                  onPress={() => console.log('IconButton Pressed')}
                />
                <Badge
                  style={[
                    styles.badge,
                    {
                      backgroundColor: bdgBgCol, //theme.colors.onSecondaryContainer,
                      color: bdgCol, //theme.colors.onPrimaryContainer,
                    },
                  ]}
                  size={15}
                >
                  ←
                </Badge>
              </View>
            ) : (
              <></>
            )}

            {/* rest */}
            {bgtBar ? (
              // budget bar item for Budgets.js
              //flex: 1 keeps width 100%
              <View style={{ flex: 1 }}>
                {/* text wrapper top */}
                <View style={styles.flatListItemBudgetBarTextElements}>
                  <Text
                    style={[
                      baseStyles.transactionsItemTitleFontSize,
                      //theme.colors.onBackground
                      { color: ttlCol },
                    ]}
                  >
                    {/* {item.title} */}
                    {itmTtl}
                  </Text>
                  <Text
                    style={[
                      baseStyles.transactionsItemDescritptionFontSize,
                      { color: theme.colors.onSurface },
                    ]}
                  >
                    {itmAmt}
                  </Text>
                </View>
                <BudgetBar
                  dscLft={bgtBarDscLft}
                  dscRgt={bgtBarDscRgt}
                  prgrNum={bgtBarPrgrNum}
                  prgrCol={bgtBarPrgrCol}
                  prgrStyle={bgtBarPrgrStyle}
                  prgrFillStyle={bgtBarPrgrFillStyle}
                />
              </View>
            ) : (
              // or transaction item for Transactions.js
              <View style={{ flex: 1, flexDirection: 'row' }}>
                {/* flex: 1 keeps elements spread across the whole width 100% */}
                <View style={{ flex: 1 }}>
                  <Text
                    style={[
                      baseStyles.transactionsItemTitleFontSize,
                      //theme.colors.onBackground
                      { color: ttlCol },
                    ]}
                  >
                    {/* {item.title} */}
                    {itmTtl}
                  </Text>

                  <Text
                    style={[
                      baseStyles.transactionsItemDescritptionFontSize,
                      //   { color: theme.colors.onSurface }
                      { color: datTimeCol },
                    ]}
                  >
                    {/* {item.date}, {item.time} */}
                    {itmDate}, {itmTime}
                  </Text>
                  <Text
                    style={[
                      baseStyles.transactionsItemDescritptionFontSize,
                      //   { color: theme.colors.onSurface }
                      { color: msgCol },
                    ]}
                  >
                    {/* {item.message} */}
                    {itmMsg}
                  </Text>
                </View>
                <View>
                  <Text
                    style={[
                      baseStyles.transactionsItemDescritptionFontSize,
                      //   { color: theme.colors.onSurface }
                      { color: amtCol },
                    ]}
                  >
                    {/* {item.amount} */}
                    {itmAmt}
                  </Text>
                </View>
              </View>
            )}
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
      // flexGrow: 1,
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
      // flex: 1, //this way text doesn't overlap flatListItemContainer
    },
    flatListItemBudgetBarTextElements: {
      // flex: 1, //this way text doesn't overlap flatListItemContainer
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'baseline', //otherwise not perfectly aigned
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
