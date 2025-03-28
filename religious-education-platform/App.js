import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Ionicons } from '@expo/vector-icons'; // استيراد أيقونات
import HomeScreen from './screens/HomeScreen';
import QuranScreen from './screens/QuranScreen';
import BibleScreen from './screens/BibleScreen';
import LoginScreen from './screens/LoginScreen'; // استيراد شاشة تسجيل الدخول
import RegisterScreen from './screens/RegisterScreen'; // استيراد شاشة التسجيل
import EmailLoginScreen from './screens/EmailLoginScreen'; // استيراد شاشة تسجيل الدخول بالبريد الإلكتروني
import QuranLibrary from './libraries/QuranLibrary'; // استيراد مكتبة القرآن الكريم
import TafsirLibrary from './libraries/TafsirLibrary'; // استيراد مكتبة التفسير
import HadithLibrary from './libraries/HadithLibrary'; // استيراد مكتبة الحديث النبوي
import FiqhScreen from './screens/FiqhScreen'; // استيراد شاشة الفقه

const Stack = createStackNavigator();

function newFunction() {
  console.log("New function added");
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login"> {/* تغيير الشاشة الافتراضية */}
        <Stack.Screen 
          name="Home" 
          component={HomeScreen} 
          options={{ 
            title: 'Home', 
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="home" color={color} size={size} />
            ),
          }} 
        />
        <Stack.Screen 
          name="Login" 
          component={LoginScreen} 
          options={{ 
            title: 'Login', 
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="log-in" color={color} size={size} />
            ),
          }} 
        />
        <Stack.Screen 
          name="Register" 
          component={RegisterScreen} 
          options={{ 
            title: 'Register', 
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="person-add" color={color} size={size} />
            ),
          }} 
        />
        <Stack.Screen 
          name="EmailLogin" 
          component={EmailLoginScreen} 
          options={{ 
            title: 'Email Login', 
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="mail" color={color} size={size} />
            ),
          }} 
        />
        <Stack.Screen 
          name="Quran" 
          component={QuranScreen} 
          options={{ 
            title: 'Quran', 
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="book" color={color} size={size} />
            ),
          }} 
        />
        <Stack.Screen 
          name="Bible" 
          component={BibleScreen} 
          options={{ 
            title: 'Bible', 
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="book" color={color} size={size} />
            ),
          }} 
        />
        <Stack.Screen 
          name="Fiqh" 
          component={FiqhScreen} 
          options={{ 
            title: 'Fiqh', 
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="book" color={color} size={size} />
            ),
          }} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
