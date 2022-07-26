import React, { useState } from 'react';
import { 
  SafeAreaView, 
  View, 
  Text, 
  TextInput,
  FlatList,
} from 'react-native';
import uuid from 'react-native-uuid';

//components
import { 
  AddNewSkillButton 
} from './components/AddNewSkillButton/AddNewSkillButton';
import { Skill } from './components/Skill/Skill';

//types
import * as T from './types';

//styles
import { styles } from './styles';

export const Home = () => {
  const [newSkill, setNewSkill] = useState('');
  const [skills, setSkills] = useState<Array<T.Skill>>([]);

  const handleAddNewSkill = () => {
    if (!!newSkill) {
      const skill = {
        id: uuid.v4() as string,
        name: newSkill,
      };

      setSkills((prevState) => [
        skill,
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
        <AddNewSkillButton onPress={handleAddNewSkill} />
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
          <FlatList 
            data={skills}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <Skill 
                skill={item.name}
              />
            )}
            showsVerticalScrollIndicator={false}
          />
        ) : (
          <Text style={styles.noSkillsText}>
            Add a skill to list it here
          </Text>
        )}
      </View>
    </SafeAreaView>
  );
}

