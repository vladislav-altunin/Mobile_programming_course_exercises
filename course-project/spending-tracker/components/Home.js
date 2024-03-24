import { Text, View, StyleSheet, ScrollView } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import TopFuncBar from './home-elem/TopFuncBar';
import CarouselCards from './home-elem/carousel/CarouselCards';
import Slider from './home-elem/carousel/Slider';
import Swipable from './home-elem/carousel/Swipable';
import Transactions from './home-elem/trnsactions/Transactions';

export default function Home() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.container}>
          <TopFuncBar />
          <Text>Hoooooooome Screen</Text>
          <Slider />
          <Transactions />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
