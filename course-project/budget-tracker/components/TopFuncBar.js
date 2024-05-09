import { Text, View } from 'react-native';
import { IconButton, MD3Colors, Button, useTheme } from 'react-native-paper';
import SearchBar from './SearchBar';
import BottomSheet from './home-elem/new-transaction/BottomSheet';

export default function TopFuncBar(props) {
  let { onPressNew } = props;
  const theme = useTheme();
  return (
    <View
      style={{
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        columnGap: 10,
        paddingHorizontal: 10,
        backgroundColor: theme.colors.primary,
      }}
    >
      <View>
        <IconButton
          icon="account"
          mode="contained"
          style={{ marginLeft: 0, marginRight: 0 }}
          size={18}
          iconColor={theme.colors.onPrimaryContainer}
          containerColor={theme.colors.primaryContainer}
          onPress={() => console.log('Pressed')}
        />
      </View>
      <SearchBar
        bgCol={theme.colors.primaryContainer}
        inputCol={theme.colors.surface}
        iconCol={theme.colors.onPrimaryContainer}
      />
      <View>
        <Button
          icon="plus"
          mode="contained"
          compact="true"
          contentStyle={{
            height: 36,
            paddingLeft: 3,
            paddingRight: 3,
            backgroundColor: theme.colors.primaryContainer,
          }}
          labelStyle={{
            marginTop: 0,
            marginLeft: 1,
            marginBottom: 0,
            lineHeight: 36,
            color: theme.colors.onPrimaryContainer,
          }}
          onPress={onPressNew}
        >
          New
        </Button>
      </View>
    </View>
  );
}
