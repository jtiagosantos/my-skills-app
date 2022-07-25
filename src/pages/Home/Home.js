import React, { useState } from 'react';
import { 
  SafeAreaView, 
  View, 
  Text, 
  TextInput,
} from 'react-native';

//components
import { 
  AddNewSkillButton 
} from './components/AddNewSkillButton/AddNewSkillButton';
import { Skill } from './components/Skill/Skill';

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
        <AddNewSkillButton onAddNewSkill={handleAddNewSkill} />
        <Text 
          style={[styles.title, {
            marginTop: 50,
            marginBottom: 20,
            fontSize: 20,
          }]}
        >
          My Skills
        </Text>
        {!!skills.length ? (
          skills.map((skill, index) => (
            <Skill key={index} skill={skill} />
          ))
        ) : (
          <Text style={styles.noSkillsText}>
            Add a skill to list it here
          </Text>
        )}
      </View>
    </SafeAreaView>
  );
}

