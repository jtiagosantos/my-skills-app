import React, { useState } from 'react';
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
  const [newSkill, setNewSkill] = useState('');
  const [skills, setSkills] = useState([]);

  const handleAddNewSkill = () => {
    if (!!newSkill) {
      setSkills((prevState) => [
        newSkill,
        ...prevState,
      ]);
  
      setNewSkill('');
    }
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <Text style={styles.title}>
          Welcome, Tiago!
        </Text>
        <TextInput 
          placeholder='New Skill'
          placeholderTextColor='#555'
          value={newSkill}
          onChangeText={setNewSkill}
          style={styles.input} 
        />
        <TouchableOpacity 
          onPress={handleAddNewSkill}
          activeOpacity={0.7}
          style={styles.button}
        >
          <Text style={styles.buttonText}>
            Add
          </Text>
        </TouchableOpacity>
        <Text 
          style={[styles.title, {
            marginTop: 50,
            marginBottom: 20,
            fontSize: 20,
          }]}
        >
          My Skills
        </Text>
        {skills.map((skill, index) => (
          <TouchableOpacity 
            key={index} 
            activeOpacity={0.7}
            style={styles.skillButton} 
          >
            <Text 
              style={styles.skillText}
            >
              {skill}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </SafeAreaView>
  );
}

