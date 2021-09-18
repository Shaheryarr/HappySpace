import React from 'react';
import { StyleSheet, Dimensions, View, Text, TouchableOpacity } from "react-native";
import styles from './styles'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const { height, width } = Dimensions.get("window");

const CustomHeader = ({ firstIcon, onPressFirstIcon }) => {
    return (
        <View style={styles.mainContainer}>
            <TouchableOpacity style={styles.firstIconContainer} onPress={onPressFirstIcon}>
                <Icon name={firstIcon} style={styles.icon} size={40} />
            </TouchableOpacity>
        </View>
    )
}

export default CustomHeader;