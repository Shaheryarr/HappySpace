import React, { useEffect, useRef, useState } from 'react';
import {
    SafeAreaView,
    Text,
    View,
    TouchableOpacity,
    Keyboard,
    KeyboardAvoidingView,
    Platform,
} from 'react-native';
import CustomHeader from '../../common/CustomHeader';
import styles from './styles';
import OTPTextView from 'react-native-otp-textinput';
import { isInternetConnected, themeStyleSheet } from '../../../constants';
import { Spinner, useToast } from 'native-base';
import { postOtpVerify } from '../../../SyncServices';
import Buttons from '../../common/Buttons';
import { useDispatch } from 'react-redux';
import { setUser } from '../../../redux/actions';

const OtpVerification = ({ navigation, route }) => {

    const { params } = route;

    const [email, setEmail] = useState(params.email);
    const [code, setCode] = useState('');
    const [loading, setLoading] = useState(false);
    const [resendCode, setResendCode] = useState(true);

    const otpRef = useRef()
    const dispatch = useDispatch();
    const Toast = useToast();

    useEffect(() => {
        // otpRef.current.clear()
    }, [])

    const handleBackAction = () => {
        navigation.goBack()
    }

    const handleChange = (text) => {
        setCode(text)

        if (text.length == 6) {
            Keyboard.dismiss()

            isInternetConnected().then(() => {
                setLoading(true)

                let params = {
                    email,
                    verification_code: code
                }

                postOtpVerify(params).then(res => {
                    const { name, designation } = res;

                    //Create user in redux
                    let userDetails = {
                        name,
                        email,
                        designation,
                    }

                    dispatch(setUser(userDetails)).then(() => {
                        setLoading(false)

                        if (params.fromLogin) {
                            navigation.navigate('SelectWorkspace', {
                                workspaces: []
                            })
                        } else {
                            //Create Workspace
                        }
                    })
                }).catch(err => {
                    setLoading(false)
                    setResendCode(true)

                    Toast.show({
                        title: err.response.data.message
                    })
                })
            }).catch(err => {
                Toast.show({
                    title: 'Please connect to the internet'
                })
            })
        }
    }

    const handleResendCode = () => {
        otpRef.current.clear()
        setResendCode(false)
    }

    return (
        <>
            <SafeAreaView style={styles.notchContainer} />
            <SafeAreaView style={styles.mainContainer}>
                <KeyboardAvoidingView
                    behavior={Platform.OS == 'ios' ? 'padding' : undefined}
                    style={{
                        flex: 1,
                    }}
                >
                    <View style={styles.topContainer}>
                        <CustomHeader firstIcon={'chevron-left'} onPressFirstIcon={handleBackAction} />

                        <View style={styles.secondaryContainer}>
                            <Text style={styles.otpHeading}>Enter OTP code to verify</Text>
                            <Text>We have sent you a One Time Password on your email: <Text style={styles.emailLink}>{email}</Text></Text>
                        </View>

                        <View style={styles.mainOtpContainer}>
                            <OTPTextView
                                ref={otpRef}
                                containerStyle={styles.otpContainer}
                                textInputStyle={styles.codeContainer}
                                tintColor={themeStyleSheet.mainColor}
                                handleTextChange={(text) => handleChange(text)}
                                inputCount={4}
                                keyboardType="numeric"
                            />
                        </View>

                        {loading ? (
                            <View style={styles.loaderContainer}>
                                <Spinner color={themeStyleSheet.mainColor} />
                            </View>
                        ) : resendCode ? (
                            <View style={styles.loaderContainer}>
                                <Buttons title='Resend Code' onPress={handleResendCode} />
                            </View>
                        ) : null}
                    </View>

                    <View style={styles.bottomContainer}>
                        <TouchableOpacity onPress={handleResendCode}>
                            <Text style={styles.subText}>Didn't get the verification code? <Text style={styles.mainText}>Resend</Text></Text>
                        </TouchableOpacity>
                    </View>
                </KeyboardAvoidingView>
            </SafeAreaView>
        </>
    )
}

export default OtpVerification;