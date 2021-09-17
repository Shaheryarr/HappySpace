import React, { useState } from 'react';
import {
    SafeAreaView,
    Text,
    View,
    Dimensions
} from 'react-native';
import styles from './styles';

const { width, height } = Dimensions.get('screen');

const Login = ({ navigation, dispatch }) => {
    return (
        <SafeAreaView
            style={styles.container}
        >

        </SafeAreaView>
    )
}

export default Login;