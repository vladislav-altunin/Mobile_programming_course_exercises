import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

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
import { Provider } from 'react-native-paper';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    /* Wrapped with portal to render Dialog Componnets (ProfileDialog, SpenDialog and TopUpDialog and */
    <Provider>
      <NavigationContainer>
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
    </Provider>
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
