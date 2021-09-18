import React, { useEffect, useState } from 'react';
import {
    SafeAreaView,
    Text,
    View,
    Dimensions,
    KeyboardAvoidingView,
    Platform,
} from 'react-native';
import { EMAIL_PATTERN, themeStyleSheet } from '../../../constants';
import Buttons from '../../common/Buttons';
import TextField from '../../common/TextField';
import styles from './styles';

const { width, height } = Dimensions.get('screen');

const Login = ({ navigation, dispatch }) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState({});
    const [loading, setLoading] = useState(false);

    const onChange = (text, type) => {
        setErrors({
            ...errors,
            [type]: ''
        })
        if (type == 'email') {
            setEmail(text);
        } else if (type == 'password') {
            setPassword(text);
        }
    }

    const navigateToForgotPassword = () => {

    }

    const navigateToRegister = () => {
        navigation.navigate('Signup')
    }

    const validateInput = () => {
        let isValid = true;
        let obj = {};
        if (email) {
            if (!EMAIL_PATTERN.test(email)) {
                isValid = false;
                obj = {
                    email: 'Email address is not in the correct format'
                }
            }
        } else {
            isValid = false;
            obj = {
                email: 'Email address is required'
            }
        }
        if (password) {
            if (password.length < 8) {
                isValid = false;
                obj = {
                    ...obj,
                    password: 'Password must be more than 8 characters'
                }   
            }
        } else {
            isValid = false;
            obj = {
                ...obj,
                password: 'Password is required'
            }
        }

        if (isValid == true) return isValid; else return obj;
    }

    const onLogin = () => {
        if (validateInput() != true) setErrors(validateInput())
        else {
            alert('all good')
        }
    }

    return (
        <>
            <SafeAreaView style={styles.notchContainer} />
            <SafeAreaView style={styles.container}>
                <View style={styles.upperView}>
                    <KeyboardAvoidingView
                        style={styles.inputView}
                        behavior={Platform.OS == 'ios' ? 'padding' : undefined}
                    >
                        <Text style={styles.heading}>Welcome Back</Text>
                        <Text style={styles.subHeading}>Log in to your HappySpace</Text>
                        <TextField
                            placeholder="Enter Email Address"
                            placeholderTextColor={themeStyleSheet.lightgray}
                            label={'Email Address'}
                            onChange={(text) => onChange(text, 'email')}
                            error={errors.email}
                            textContentType={'emailAddress'}
                        />
                        <TextField
                            placeholder="********"
                            placeholderTextColor={themeStyleSheet.lightgray}
                            label={'Password'}
                            secureTextEntry={true}
                            onChange={(text) => onChange(text, 'password')}
                            error={errors.password}
                            textContentType={'password'}
                            // returnKeyType={'go'}
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