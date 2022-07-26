import React, { FC } from 'react';
import { 
  Text, 
  TouchableOpacity, 
  TouchableOpacityProps 
} from 'react-native';


//styles
import { styles } from './styles';

export const AddNewSkillButton: FC<TouchableOpacityProps> = ({ 
  ...rest
}) => {
  return (
    <TouchableOpacity 
      activeOpacity={0.7}
      style={styles.button}
      {...rest}
    >
      <Text style={styles.buttonText}>
        Add
      </Text>
    </TouchableOpacity>
  );
}