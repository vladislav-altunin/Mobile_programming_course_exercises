import { View, FlatList, StyleSheet, Text } from "react-native";

export default function HistoryScreen({route}) {

    const { history } = route.params;

    return(
        <View style={styles.container}>
            <FlatList
            style={styles.flatlist}
            data={history}
            renderItem={({item}) => <Text>{item.key}</Text>}
            keyExtractor={(item, index) => index.toString()}
            ListHeaderComponent={()=><Text style={{textAlign: 'center'}}>History</Text>}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  
    inputBox: {
      width: 200,
      borderColor: 'black',
      borderWidth: 1,
    },
  
    buttonView: {
      flexDirection: 'row',
    },
  
    button: {
      backgroundColor: '#338FFF',
      padding: 10,
      margin: 20,
    },
  
    text: {
      color: 'white',
    },
  
    flatlist: {
      height: 500,
      flexGrow: 0,
    },
  });