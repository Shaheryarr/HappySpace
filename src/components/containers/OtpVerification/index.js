import React, { useEffect, useRef, useState } from 'react';
import { SafeAreaView, Text, View, TouchableOpacity, Keyboard } from 'react-native';
import CustomHeader from '../../common/CustomHeader';
import styles from './styles';
import OTPTextView from 'react-native-otp-textinput';
import { themeStyleSheet } from '../../../constants';

const OtpVerification = ({ navigation, route }) => {

    const [email, setEmail] = useState('sherryssj7@gmail.com');
    const [code, setCode] = useState('');

    const otpRef = useRef()

    useEffect(() => {
        otpRef.current.clear()
    }, [])

    const handleBackAction = () => {
        navigation.goBack()
    }

    const handleChange = (text) => {
        setCode(text)

        if (text.length == 6) {
            Keyboard.dismiss()
        }
    }

    const handleResendCode = () => {
        otpRef.current.clear()
    }

    return (
        <>
            <SafeAreaView style={styles.notchContainer} />
            <SafeAreaView style={styles.mainContainer}>
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
                            inputCount={6}
                            keyboardType="numeric"
                        />
                    </View>
                </View>

                <View style={styles.bottomContainer}>
                    <TouchableOpacity onPress={handleResendCode}>
                        <Text style={styles.subText}>Didn't get the verification code? <Text style={styles.mainText}>Resend</Text></Text>
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
        </>
    )
}

export default OtpVerification;