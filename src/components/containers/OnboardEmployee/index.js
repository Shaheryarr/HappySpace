import { useToast } from 'native-base';
import React, { useState, useEffect } from 'react';
import {
    SafeAreaView,
    Text,
    View,
    Dimensions,
    KeyboardAvoidingView,
    Platform,
} from 'react-native';
import OTPTextView from 'react-native-otp-textinput';
import { useSelector } from 'react-redux';
import { themeStyleSheet } from '../../../constants';
import { changePassword, resetPassword } from '../../../SyncServices';
import Buttons from '../../common/Buttons';
import TextField from '../../common/TextField';
import styles from './styles';

const OnboardEmployee = ({ navigation, route }) => {

    const [password, setPassword] = useState('');
    const [confirm, setConfirm] = useState(false);
    const [errors, setErrors] = useState({})

    const user = useSelector(state => state.user);

    const { email = '', user_workspaces, origin = 'onboard', otp = '' } = route.params;

    const Toast = useToast();

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
            if (origin == 'forgot') {
                const PARAMS = {
                    email,
                    verification_code: otp,
                    password,
                }
                resetPassword(PARAMS).then(res => {
                    navigation.reset({
                        routes: [
                            {
                                name: 'Login',
                                params: {
                                    // workspaces: user_workspaces
                                }
                            }
                        ]
                    });
                }).catch(err => {
                    Toast.show({
                        title: err.response.data.message
                    })
                })
            } else {
                const PARAMS = {
                    password
                }
                changePassword(PARAMS).then(res => {
                    if (res.status == true) {
                        navigation.reset({
                            routes: [
                                {
                                    name: 'Login',
                                }
                            ]
                        });
                    }
                }).catch(err => {
                    console.log("Err", err);
                    Toast.show({
                        title: 'Something went wrong'
                    })
                })
            }
        }
    }

    const resetRoutes = () => {
        navigation.reset({
            index: 0,
            routes: [{ name: 'GettingStarted' }],
        });
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
                        {origin == 'forgot' && (
                            <OTPTextView
                                // ref={otpRef}
                                defaultValue={otp}
                                containerStyle={styles.otpContainer}
                                textInputStyle={styles.codeContainer}
                                tintColor={themeStyleSheet.mainColor}
                                // handleTextChange={(text) => handleChange(text)}
                                inputCount={4}
                                keyboardType="numeric"
                            />
                        )}
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
                        onPress={resetRoutes}
                        style={styles.registerText}
                    >Go Back</Text>
                </View>
            </SafeAreaView>
        </>
    )
}

export default OnboardEmployee;