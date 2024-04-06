import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, useColorScheme } from 'react-native';

/*Theme exports*/
import { MD3DarkTheme, MD3LightTheme, PaperProvider } from 'react-native-paper';
import * as themeColors from './constants/themeColors.json';

/* Custom theme*/
/*  Own components */
import Home from './components/Home';
import SpendingsScreen from './components/SpendingsScreen';
import SupportScreen from './components/SupportScreen';

/* React navigation imports */
/*
To install them into the project use the following commands:
npm install @react-navigation/native --save
npm install @react-navigation/bottom-tabs --save
npm install @react-navigation/stack --save
*/
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

/* Install icons: npm install react-native-vector-icons*/
import Icon from 'react-native-vector-icons/MaterialIcons';

const Tab = createBottomTabNavigator();

export default function App() {
  /* Theme settings */
  const colorScheme = useColorScheme();

  const customTheme =
    colorScheme === 'dark'
      ? { ...MD3DarkTheme, colors: themeColors.dark }
      : { ...MD3LightTheme, colors: themeColors.light };
  return (
    /* Wrapped with portal to render Dialog Componnets (ProfileDialog, SpenDialog and TopUpDialog and */
    <PaperProvider theme={customTheme}>
      {console.log(colorScheme)}
      <NavigationContainer styles={{ margin: 10 }}>
        <Tab.Navigator
          initialRouteName="Home"
          screenOptions={({ route }) => ({ tabBarActiveTintColor: '#000' })}
        >
          <Tab.Screen
            name="Home"
            component={Home} //HomeScreen
            options={{
              tabBarIcon: ({ color, size }) => (
                <Icon name="home" color={color} size={size} />
              ),
              headerShown: false,
            }}
          />
          <Tab.Screen
            name="Spendings"
            component={SupportScreen} //SpendingsStackScreen
            options={{
              tabBarIcon: ({ color, size }) => (
                <Icon name="format-list-bulleted" color={color} size={size} />
              ),
            }}
          />
          <Tab.Screen
            name="Support"
            component={SupportScreen}
            options={{
              tabBarIcon: ({ color, size }) => (
                <Icon name="message" color={color} size={size} />
              ),
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
