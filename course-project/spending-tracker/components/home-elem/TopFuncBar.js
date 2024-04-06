import { Text, View } from 'react-native';
import { IconButton, MD3Colors, Button, Searchbar } from 'react-native-paper';

export default function TopFuncBar() {
  return (
    <View
      style={{
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        columnGap: 10,
        paddingHorizontal: 10,
      }}
    >
      <View>
        <IconButton
          icon="account"
          mode="contained"
          style={{ marginLeft: 0, marginRight: 0 }}
          size={18}
          iconColor={MD3Colors.error50}
          onPress={() => console.log('Pressed')}
        />
      </View>
      <View style={{ flexGrow: 1 }}>
        <Searchbar
          placeholder="Search"
          style={{ height: 36, minHeight: 36 }}
          inputStyle={{ minHeight: 0 }} // miHeigh 0 to make serach bar work
        />
      </View>
      <View>
        <Button
          icon="plus"
          mode="contained"
          compact="true"
          contentStyle={{
            height: 36,
            paddingLeft: 3,
            paddingRight: 3,
          }}
          labelStyle={{
            marginTop: 0,
            marginLeft: 1,
            marginBottom: 0,
            lineHeight: 36,
          }}
        >
          New
        </Button>
      </View>
    </View>
  );
}
