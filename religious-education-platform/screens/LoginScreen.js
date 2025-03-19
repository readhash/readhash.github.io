import React, { useState } from 'react';
import { View, Text, TextInput, Button, Picker } from 'react-native';

export default function LoginScreen({ navigation }) {
  const [emailOrPhone, setEmailOrPhone] = useState('');
  const [language, setLanguage] = useState('en');

  const handleLogin = () => {
    // منطق تسجيل الدخول هنا
    navigation.navigate('Home');
  };

  return (
    <View>
      <Text>تسجيل الدخول</Text>
      <TextInput
        placeholder="البريد الإلكتروني أو رقم الهاتف"
        value={emailOrPhone}
        onChangeText={setEmailOrPhone}
      />
      <Picker
        selectedValue={language}
        onValueChange={(itemValue) => setLanguage(itemValue)}
      >
        <Picker.Item label="English" value="en" />
        <Picker.Item label="العربية" value="ar" />
        {/* إضافة المزيد من اللغات هنا */}
      </Picker>
      <Button title="تسجيل الدخول" onPress={handleLogin} />
    </View>
  );
}
