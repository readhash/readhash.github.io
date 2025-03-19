import React from 'react';
import { View, Text, Button } from 'react-native';

export default function HomeScreen({ navigation }) {
  return (
    <View>
      <Text>Welcome to the Religious Education Platform</Text>
      <Button title="Quran" onPress={() => navigation.navigate('Quran')} />
      <Button title="Bible" onPress={() => navigation.navigate('Bible')} />
      <Button title="Torah" onPress={() => navigation.navigate('Torah')} />
    </View>
  );
}
