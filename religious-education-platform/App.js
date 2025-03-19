import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import QuranScreen from './screens/QuranScreen';
import BibleScreen from './screens/BibleScreen';
import TorahScreen from './screens/TorahScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Quran" component={QuranScreen} />
        <Stack.Screen name="Bible" component={BibleScreen} />
        <Stack.Screen name="Torah" component={TorahScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
