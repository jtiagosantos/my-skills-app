import React, { FC } from 'react';
import { TouchableOpacity, Text } from 'react-native';

//types
import { SkillProps } from './types';

//styles
import { styles } from './styles';

export const Skill: FC<SkillProps> = ({ skill, ...rest }) => {
  return (
    <TouchableOpacity 
      activeOpacity={0.7}
      style={styles.skillButton} 
      {...rest}
    >
      <Text 
        style={styles.skillText}
      >
        {skill}
      </Text>
    </TouchableOpacity>
  );
}