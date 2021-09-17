import React, { useState } from 'react';
import {
    SafeAreaView,
    Text,
    View,
    Dimensions
} from 'react-native';
import { themeStyleSheet } from '../../../constants';
import TextField from '../../common/TextField';
import styles from './styles';

const { width, height } = Dimensions.get('screen');

const Login = ({ navigation, dispatch }) => {
    return (
        <>
            <SafeAreaView style={{ flex:0, backgroundColor: themeStyleSheet.white }} />
            <SafeAreaView
                style={styles.container}
            >
                <View
                    style={{
                        backgroundColor: themeStyleSheet.white,
                        height: height * 0.8,
                        width,
                        borderBottomLeftRadius: 35,
                        borderBottomRightRadius: 35,
                        justifyContent: "space-between"
                    }}
                >
                    <View
                        style={{
                            height: '60%',
                            // backgroundColor: the,
                            alignItems: "center",
                            justifyContent: 'space-evenly'
                            // width: width * 0.8,
                        }}
                    >
                        <Text
                            style={{
                                textAlign: 'left',
                                width: width * 0.8,
                                fontSize: 18,
                                fontWeight: 'bold'
                            }}
                        >Welcome Back...</Text>
                        <Text
                            style={{
                                textAlign: 'left',
                                width: width * 0.8,
                                fontSize: 16,
                            }}
                        >Log in to your workspace</Text>
                        <TextField
                            placeholder="Enter Email Address"
                            placeholderTextColor={themeStyleSheet.lightgray}
                            label={'Email Address'}
                        />
                        <TextField
                            placeholder="Enter Email Address"
                            placeholderTextColor={themeStyleSheet.lightgray}
                            label={'Email Address'}
                        />
                        <Text
                            style={{
                                textAlign: 'left',
                                width: width * 0.8,
                                fontSize: 16,
                                color: themeStyleSheet.mainColor,
                                fontWeight: 'bold'
                            }}
                        >Forgot Password?</Text>
                    </View>
                    <View />
                </View>
                <View
                    style={{
                        width,
                        paddingVertical: 20,
                    }}
                >
                    <Text>asd</Text>
                </View>
            </SafeAreaView>
        </>
    )
}

export default Login;