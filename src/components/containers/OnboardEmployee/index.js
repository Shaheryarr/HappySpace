import React, { useState, useEffect } from 'react';
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

const OnboardEmployee = ({ navigation, route }) => {

    const [password, setPassword] = useState('');
    const [confirm, setConfirm] = useState(false);
    const [errors, setErrors] = useState({})

    const { email } = route.params;

    const onChange = (text, type) => {
        setErrors({
            ...errors,
            [type]: ''
        })
        if (type == 'password') {
            setPassword(text);
        } else if (type == 'confirm') {
            if (text == password) {
                setConfirm(true);
            } else {
                setConfirm(false);
            }
        }
    }

    const onSubmit = () => {
        if (!confirm) {
            setErrors({
                confirm: 'Please verify your password'
            })
        } else {
            alert('good')
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
                        <Text style={styles.heading}>{`Welcome`}</Text>
                        <Text style={styles.subHeading}>{`Let's set up your HappySpace`}</Text>
                        <TextField
                            placeholder="********"
                            placeholderTextColor={themeStyleSheet.lightgray}
                            label={'Password'}
                            secureTextEntry={true}
                            onChange={(text) => onChange(text, 'password')}
                            error={errors.password}
                            textContentType={'password'}
                        />
                        <TextField
                            placeholder="********"
                            placeholderTextColor={themeStyleSheet.lightgray}
                            label={'Confirm Password'}
                            secureTextEntry={true}
                            onChange={(text) => onChange(text, 'confirm')}
                            error={errors.confirm}
                            textContentType={'password'}
                        />
                        <Buttons
                            title={'START'}
                            onPress={onSubmit}
                            disabled={!confirm}
                        />
                    </KeyboardAvoidingView>
                </View>
                <View style={styles.lowerView}>
                    <Text style={{ color: themeStyleSheet.white }}>{`Not ${email}? `}</Text>
                    <Text
                        // onPress={navigateToRegister}
                        style={styles.registerText}
                    >Register Now</Text>
                </View>
            </SafeAreaView>
        </>
    )
}

export default OnboardEmployee;