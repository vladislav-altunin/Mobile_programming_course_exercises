import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, useColorScheme } from 'react-native';
import React, { useRef } from 'react';
// import * as SystemUI from 'expo-system-ui';

/*Theme exports*/
import {
  MD3DarkTheme,
  MD3LightTheme,
  PaperProvider,
  adaptNavigationTheme,
} from 'react-native-paper';
import * as themeColors from './constants/themeColors.json';

/* Custom theme*/
/*  Own components */
import Home from './components/Home';
import Transactions from './components/Transactions';
import Budgets from './components/Budgets';

/* React navigation imports */
/*
To install them into the project use the following commands:
npm install @react-navigation/native --save
npm install @react-navigation/bottom-tabs --save
npm install @react-navigation/stack --save
*/

import {
  NavigationContainer,
  useTheme as useNavTheme,
} from '@react-navigation/native';
import DarkTheme from './constants/DarkTheme';
import DefaultTheme from './constants/DefaultTheme';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

/*Merge React native paper and React Navigations themes*/
import merge from 'deepmerge';

/* Install icons: npm install react-native-vector-icons*/
import Icon from 'react-native-vector-icons/MaterialIcons';
import { setBackgroundColorAsync } from 'expo-system-ui';
import { GestureHandlerRefContext } from '@react-navigation/stack';

import {
  GestureHandlerRootView,
  gestureHandlerRootHOC,
} from 'react-native-gesture-handler';
import BottomSheet from './components/home-elem/new-transaction/BottomSheet';

export default function App() {
  const Tab = createBottomTabNavigator();
  /* Theme settings */
  const colorScheme = useColorScheme();
  {
    console.log(colorScheme);
  }

  /*Combine themes (in plain JS without merge)*/
  // const { LightTheme, DarkTheme } = adaptNavigationTheme({
  //   reactNavigationLight: NavigationDefaultTheme,
  //   reactNavigationDark: NavigationDarkTheme,
  // });

  const CustomTheme =
    colorScheme === 'dark'
      ? { ...MD3DarkTheme, colors: themeColors.dark }
      : { ...MD3LightTheme, colors: themeColors.light };

  const { colors } = useNavTheme();
  const colorSchemeNav = 'dark';

  return (
    /*GestureHandlerRootView for Bottom Sheet (New Transaction), advised to keep as close as possible to the root*/
    /* Behaves like a regular View */
    <GestureHandlerRootView style={{ flex: 1 }}>
      {/* PaperProvide to use theme colors (scheme) */}
      <PaperProvider theme={CustomTheme}>
        {console.log(colorScheme)}
        <NavigationContainer
          theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}
        >
          <Tab.Navigator
            initialRouteName="Home"
            screenOptions={({ route }) => ({})}
          >
            <Tab.Screen
              name="Home"
              // each screen should be wrapped with gestureHandlerRootHOC() according to react-native-reanimated guides
              component={gestureHandlerRootHOC(Home)} //HomeScreen
              options={{
                tabBarIcon: ({ color, size }) => (
                  <Icon name="home" size={30} color={color} /> // passing {color} picks the color from the color scheme and sets the active color accordingly
                ),
                headerShown: false,
              }}
            />
            <Tab.Screen
              name="Transactions"
              // each screen should be wrapped with gestureHandlerRootHOC() according to react-native-reanimated guides
              component={gestureHandlerRootHOC(Transactions)} //SpendingsStackScreen
              options={{
                tabBarIcon: ({ color, size }) => (
                  <Icon name="format-list-bulleted" color={color} size={30} />
                ),
              }}
            />
            <Tab.Screen
              name="Budgets"
              // each screen should be wrapped with gestureHandlerRootHOC() according to react-native-reanimated guides
              component={gestureHandlerRootHOC(Budgets)}
              options={{
                tabBarIcon: ({ color, size }) => (
                  <Icon name="message" color={color} size={30} />
                ),
              }}
            />
          </Tab.Navigator>
        </NavigationContainer>
        {/* <GestureDetector gesture={pan}>
        </GestureDetector> */}
        <BottomSheet />
      </PaperProvider>
    </GestureHandlerRootView>
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
