import React, { useEffect, useState } from 'react';
import { useToast } from 'native-base';
import { Linking, SafeAreaView, Text } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { postLoginRequest } from '../../../SyncServices';
import { setUser } from '../../../redux/actions';

const SplashScreen = ({ navigation }) => {

    const [loading, setLoading] = useState(true)

    const user = useSelector(state => state.user);
    const workspace = useSelector(state => state.workspace);

    const Toast = useToast();

    const dispatch = useDispatch();


    useEffect(() => {
        Linking.getInitialURL().then(res => {
            formatLink(res);
        })

        console.log('User: ', user)
        console.log('Workspace: ', workspace)

        const subscribe = Linking.addEventListener('url', handleLink);

        return () => {
            subscribe.remove();
        }
    }, [])

    const handleLink = ({ url }) => {
        console.log('LINK', url)
        formatLink(url);
    }

    const formatLink = (link) => {
        // HappySpace://activate/mhasank999@gmail.com/<password>/
        if (link) {
            const SUFFIX = link.split('//')[1];
            const ACTION = SUFFIX.split('/');
            if (ACTION[0] == 'activate') {
                const EMAIL = ACTION[1];
                const PASSWORD = ACTION[2];
                const PARAMS = {
                    email: EMAIL,
                    password: PASSWORD,
                }
                setLoading(true);
                loginUser(PARAMS);
            } else if (ACTION[0] == 'forgot') {
                const EMAIL = ACTION[1];
                const PASSWORD = ACTION[2];
                navigation.reset({
                    routes: [
                        {
                            name: 'OnboardEmployee',
                            params: {
                                email: EMAIL,
                                otp: PASSWORD,
                                origin: 'forgot'
                            }
                        }
                    ]
                });
            }
        }
    }

    const loginUser = (PARAMS) => {
        postLoginRequest(PARAMS).then(res => {
            const { isActive, user_workspaces, designation, name } = res;

            if (isActive) {
                let userDetails = {
                    name,
                    email: PARAMS.email,
                    designation,
                }

                dispatch(setUser(userDetails)).then(() => {
                    setLoading(false)
                    navigation.reset({
                        routes: [
                            {
                                name: 'OnboardEmployee',
                                params: {
                                    email: PARAMS.email,
                                    user_workspaces
                                }
                            }
                        ]
                    });
                })
            } else {
                Toast.show({
                    title: 'We have sent a one time password to your email. Please verify',
                    duration: 5000
                })

                navigation.navigate('OtpVerification', {
                    email,
                    fromLogin: true
                });
            }
        }).catch(err => {
            setLoading(false)
            console.log('error', err);
            Toast.show({
                title: 'Invalid Credentials'
            })
            return;
        })
    }

    const navigate = (name, data = {}) => {
        navigation.navigate(name, data);
    }

    return (
        <SafeAreaView>
            <Text>This is a basic SplashScreen</Text>
            <Text onPress={() => navigate('Login')} >LOGIN</Text>
            <Text onPress={() => navigate('Signup')} >SIGNUP</Text>
            <Text onPress={() => navigate('GettingStarted')} >GETTINGSTARTED</Text>
            <Text onPress={() => navigate('OtpVerification')}>OTP</Text>
            <Text onPress={() => navigate('appRoutes')}>Home</Text>
        </SafeAreaView>
    )
}

export default SplashScreen;