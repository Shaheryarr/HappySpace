import React from 'react';
import { View, Text, TouchableNativeFeedback } from 'react-native';
import styles from './styles';

const Buttons = ({ title, onPress }) => {
    return (
        <View style={styles.mainContainer}>
            <TouchableNativeFeedback background={TouchableNativeFeedback.Ripple('rgba(255,255,255,.3)', false)} onPress={onPress}>
                <View style={styles.container}>
                    <Text style={styles.textStyle}>{title.toUpperCase()}</Text>
                </View>
            </TouchableNativeFeedback>
        </View>
    )
}

export default Buttons;