import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

//styles
import { styles } from './styles';

export const AddNewSkillButton = ({ onAddNewSkill }) => {
  return (
    <TouchableOpacity 
      onPress={onAddNewSkill}
      activeOpacity={0.7}
      style={styles.button}
    >
      <Text style={styles.buttonText}>
        Add
      </Text>
    </TouchableOpacity>
  );
}