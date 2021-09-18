import React from 'react';
import { View, Text, TouchableNativeFeedback } from 'react-native';
import styles from './styles';

const Buttons = ({ title, onPress, type }) => {
    return type == 'primary' ? (
        <View style={styles.mainContainer}>
            <TouchableNativeFeedback background={TouchableNativeFeedback.Ripple('rgba(255,255,255,.3)', false)} onPress={onPress}>
                <View style={styles.containerPrimary}>
                    <Text style={styles.textStylePrimary}>{title.toUpperCase()}</Text>
                </View>
            </TouchableNativeFeedback>
        </View>
    ) : type == 'secondary' ? (
        <View style={styles.mainContainer}>
            <TouchableNativeFeedback background={TouchableNativeFeedback.Ripple('rgba(255,255,255,.3)', false)} onPress={onPress}>
                <View style={styles.containerSecondary}>
                    <Text style={styles.textStyleSecondary}>{title.toUpperCase()}</Text>
                </View>
            </TouchableNativeFeedback>
        </View>
    ) : (
        <View style={styles.mainContainer}>
            <TouchableNativeFeedback background={TouchableNativeFeedback.Ripple('rgba(255,255,255,.3)', false)} onPress={onPress}>
                <View style={styles.containerSecondary}>
                    <Text style={styles.textStyleSecondary}>{title.toUpperCase()}</Text>
                </View>
            </TouchableNativeFeedback>
        </View>
    )
}

export default Buttons;