import { Text, View } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

/*Theme exports*/
import { useTheme } from 'react-native-paper';
import SearchBar from './SearchBar';
import TransactionsAggregated from './transactions-elem/TransactionsAggregated';

export default function Transactions() {
  const theme = useTheme();
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: theme.colors.surfaceVariant,
      }}
      edges={['right', 'left', 'bottom']}
    >
      {/* The serach bar required its own wrap with padding as paddingHor doesn't work for the whole component */}
      {/* style={{ paddingHorizontal: 10, marginVertical: 10 }} */}
      <SearchBar
        bgCol={theme.colors.outline}
        inputCol={theme.colors.onPrimaryContainer}
        iconCol={theme.colors.primary}
        mrgVer={15}
        mrgHor={10}
      />
      <TransactionsAggregated />
    </SafeAreaView>
  );
}
