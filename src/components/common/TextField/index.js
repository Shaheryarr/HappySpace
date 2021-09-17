import React from 'react';
import {View, Text, TextInput, Dimensions} from 'react-native';
import styles from './styles';

const {width} = Dimensions.get('screen');

const TextField = ({
    placeholder,
    value,
    onChange,
    autoFocus,
    placeholderTextColor,
    label,
    secureTextEntry
}) => {
    return (
        <View style={styles.inputContainer}>
            <Text style={styles.labelStyle}>{label}</Text>
            <TextInput
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                autoFocus={autoFocus}
                placeholderTextColor={placeholderTextColor}
                style={styles.textStyle}
                returnKeyType='go'
                secureTextEntry={secureTextEntry}
                onChangeText={(text) => onChange(text)}
            />
        </View>
    )
}

export default TextField;
