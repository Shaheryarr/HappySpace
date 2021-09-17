import React, { useState } from 'react';
import {
    SafeAreaView,
    Text,
    View,
    Dimensions,
    KeyboardAvoidingView,
    Platform,
} from 'react-native';
import { themeStyleSheet } from '../../../constants';
import Buttons from '../../common/Buttons';
import TextField from '../../common/TextField';
import styles from './styles';

const { width, height } = Dimensions.get('screen');

const Login = ({ navigation, dispatch }) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const onChange = (text, type) => {
        if (type == 'email') {
            setEmail(text);
        } else if (type == 'password') {
            setPassword(text);
        }
    }

    const navigateToForgotPassword = () => {

    }

    const navigateToRegister = () => {

    }

    const onLogin = () => {
        alert(email + password)
    }

    return (
        <>
            <SafeAreaView style={styles.notchContainer} />
            <SafeAreaView
                style={styles.container}
            >
                <View style={styles.upperView}>
                    <KeyboardAvoidingView
                        style={styles.inputView}
                        behavior={Platform.OS == 'ios' ? 'padding' : undefined}
                    >
                        <Text style={styles.heading}>Welcome Back...</Text>
                        <Text style={styles.subHeading}>Log in to your workspace</Text>
                        <TextField
                            placeholder="Enter Email Address"
                            placeholderTextColor={themeStyleSheet.lightgray}
                            label={'Email Address'}
                            onChange={(text) => onChange(text, 'email')}
                        />
                        <TextField
                            placeholder="********"
                            placeholderTextColor={themeStyleSheet.lightgray}
                            label={'Password'}
                            secureTextEntry={true}
                            onChange={(text) => onChange(text, 'password')}
                        />
                        <Text
                            onPress={navigateToForgotPassword}
                            style={styles.forgotText}
                        >Forgot Password?</Text>
                        <Buttons
                            title={'LOG IN'}
                            onPress={onLogin}
                        />
                    </KeyboardAvoidingView>
                </View>
                <View style={styles.lowerView}>
                    <Text style={{ color: themeStyleSheet.white }}>Not Registered Yet? </Text>
                    <Text
                        onPress={navigateToRegister}
                        style={styles.registerText}
                    >Register Now</Text>
                </View>
            </SafeAreaView>
        </>
    )
}

export default Login;