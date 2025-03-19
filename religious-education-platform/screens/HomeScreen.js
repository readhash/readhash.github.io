import React from 'react';
import { View, Text, Button } from 'react-native';

export default function HomeScreen({ navigation }) {
  return (
    <View>
      <Text>Welcome to the Religious Education Platform</Text>
      <Button title="Login" onPress={() => navigation.navigate('Login')} /> {/* زر جديد */}
      <Button title="Quran" onPress={() => navigation.navigate('Quran')} />
      <Button title="Quran Tafsir" onPress={() => navigation.navigate('QuranTafsir')} /> {/* زر جديد */}
      <Button title="Quran Hadith" onPress={() => navigation.navigate('QuranHadith')} /> {/* زر جديد */}
      <Button title="Quran Seerah" onPress={() => navigation.navigate('QuranSeerah')} /> {/* زر جديد */}
      <Button title="Quran Fiqh" onPress={() => navigation.navigate('QuranFiqh')} /> {/* زر جديد */}
      <Button title="Quran Libraries" onPress={() => navigation.navigate('QuranLibraries')} /> {/* زر جديد */}
      <Button title="Bible" onPress={() => navigation.navigate('Bible')} />
      <Button title="Bible Tafsir" onPress={() => navigation.navigate('BibleTafsir')} /> {/* زر جديد */}
      <Button title="Bible Hadith" onPress={() => navigation.navigate('BibleHadith')} /> {/* زر جديد */}
      <Button title="Bible Seerah" onPress={() => navigation.navigate('BibleSeerah')} /> {/* زر جديد */}
      <Button title="Bible Fiqh" onPress={() => navigation.navigate('BibleFiqh')} /> {/* زر جديد */}
      <Button title="Bible Libraries" onPress={() => navigation.navigate('BibleLibraries')} /> {/* زر جديد */}
      <Button title="Torah" onPress={() => navigation.navigate('Torah')} />
      <Button title="Torah Tafsir" onPress={() => navigation.navigate('TorahTafsir')} /> {/* زر جديد */}
      <Button title="Torah Hadith" onPress={() => navigation.navigate('TorahHadith')} /> {/* زر جديد */}
      <Button title="Torah Seerah" onPress={() => navigation.navigate('TorahSeerah')} /> {/* زر جديد */}
      <Button title="Torah Fiqh" onPress={() => navigation.navigate('TorahFiqh')} /> {/* زر جديد */}
      <Button title="Torah Libraries" onPress={() => navigation.navigate('TorahLibraries')} /> {/* زر جديد */}
      <Button title="Hadith" onPress={() => navigation.navigate('Hadith')} />
      <Button title="Ethical Monitoring" onPress={() => navigation.navigate('EthicalMonitoring')} /> {/* زر جديد */}
      <Button title="Debates" onPress={() => navigation.navigate('Debates')} /> {/* زر جديد */}
      <Button title="Volunteer for Teaching" onPress={() => navigation.navigate('VolunteerTeaching')} /> {/* زر جديد */}
      <Button title="People's Blogs" onPress={() => navigation.navigate('PeoplesBlogs')} /> {/* زر جديد */}
      <Button title="Ask Questions" onPress={() => navigation.navigate('AskQuestions')} /> {/* زر جديد */}
      <Button title="Charity Works" onPress={() => navigation.navigate('CharityWorks')} /> {/* زر جديد */}
    </View>
  );
}
