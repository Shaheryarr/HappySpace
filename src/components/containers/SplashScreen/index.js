import React, { useEffect } from 'react';
import { Linking, SafeAreaView, Text } from 'react-native';
import { useSelector } from 'react-redux';

const SplashScreen = ({ navigation }) => {

    const user = useSelector(state => state.user);
    const workspace = useSelector(state => state.workspace);

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
        if (link) {
            const SUFFIX = link.split('//')[1];
            const ACTION = SUFFIX.split('/');
            if (ACTION[0] == 'activate') {
                const EMAIL = ACTION[1];
                console.log(EMAIL)
                navigate('OnboardEmployee', {
                    email: EMAIL,
                })
            } else if (ACTION[0] == '') {

            }
        }
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