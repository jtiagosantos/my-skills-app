import React from 'react';
import { 
  SafeAreaView, 
  View, 
  Text, 
  TextInput,
  TouchableOpacity
} from 'react-native';

//styles
import { styles } from './styles';

export const Home = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <Text style={styles.title}>
          Welcome, Tiago!
        </Text>
        <TextInput 
          placeholder='New Skill'
          placeholderTextColor='#555'
          style={styles.input} 
        />
        <TouchableOpacity 
          activeOpacity={0.7}
          style={styles.button}
        >
          <Text style={styles.buttonText}>Add</Text>
        </TouchableOpacity>
        <Text 
          style={[styles.title, {
            marginTop: 50,
            fontSize: 20,
          }]}
        >
          My Skills
        </Text>
      </View>
    </SafeAreaView>
  );
}

