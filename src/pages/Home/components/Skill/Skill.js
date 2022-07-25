import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

//styles
import { styles } from './styles';

export const Skill = ({ skill }) => {
  return (
    <TouchableOpacity 
      activeOpacity={0.7}
      style={styles.skillButton} 
    >
      <Text 
        style={styles.skillText}
      >
        {skill}
      </Text>
    </TouchableOpacity>
  );
}