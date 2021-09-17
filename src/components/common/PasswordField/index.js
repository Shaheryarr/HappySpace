import React from 'react';
import {View, Text, TextInput, Dimensions} from 'react-native';
import useToggle from '../../../Hooks/useToggle';
import styles from './styles';

const {width} = Dimensions.get('screen');
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const PasswordField = ({
  placeholder,
  value,
  onChange,
  autoFocus,
  placeholderTextColor,
  label,
}) => {
  const [view, toggleView] = useToggle(true);
  return (
    <View style={styles.inputContainer}>
      <Text style={styles.labelStyle}>{label}</Text>
      <View style={styles.row}>
        <TextInput
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          autoFocus={autoFocus}
          placeholderTextColor={placeholderTextColor}
          style={styles.textStyle}
          returnKeyType="go"
          secureTextEntry={view}
        />
        <Icon
          name={view ? 'eye-off' : 'eye'}
          style={styles.icon}
          size={21}
          onPress={() => toggleView(!view)}
        />
      </View>
    </View>
  );
};

export default PasswordField;
