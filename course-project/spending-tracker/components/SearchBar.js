import { Text, View } from 'react-native';
import { Searchbar, useTheme } from 'react-native-paper';

//This is dynamic component that accepts bgColor, inputColor, iconColor props
export default function SearchBar(props) {
  let { bgCol, inputCol, iconCol, mrgHor, mrgVer, pdgHor } = props;
  return (
    <View
      style={{
        flexGrow: 1,
        marginHorizontal: mrgHor,
        marginVertical: mrgVer,
        paddingHorizontal: pdgHor,
      }}
    >
      <Searchbar
        placeholder="Search"
        style={{
          height: 36,
          minHeight: 36,
          backgroundColor: bgCol, //theme.colors.primaryContainer,
        }}
        inputStyle={{
          minHeight: 0,
          color: inputCol, //theme.colors.surface,
        }} // miHeigh 0 to make serach bar work
        iconColor={iconCol} //{theme.colors.onPrimaryContainer}
        placeholderTextColor={iconCol}
      />
    </View>
  );
}
