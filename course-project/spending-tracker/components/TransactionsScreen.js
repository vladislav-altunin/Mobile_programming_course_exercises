import { Text, View } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

/*Theme exports*/
import { useTheme } from 'react-native-paper';
import SearchBar from './SearchBar';

export default function TransactionsScreen() {
  const theme = useTheme();
  return (
    <SafeAreaView
      style={{ flex: 1, backgroundColor: theme.colors.surfaceVariant }}
      edges={['right', 'left']}
    >
      <SearchBar
        bgCol={theme.colors.primaryContainer}
        inputCol={theme.colors.surface}
        iconCol={theme.colors.onPrimaryContainer}
      />
      <View>
        <Text style={{ color: theme.colors.onBackground }}>
          Transactions Screen
        </Text>
      </View>
    </SafeAreaView>
  );
}
