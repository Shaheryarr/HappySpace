import React, { useEffect } from 'react';
import { Linking, SafeAreaView, Text } from 'react-native';

const SplashScreen = () => {

    useEffect(() => {
        Linking.getInitialURL().then(res => {
            formatLink(res);
        })

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
        const SUFFIX = link.split('//')[1];
        const ACTION = SUFFIX.split('/');
        if (ACTION[0] == 'activate') {
            const EMAIL = ACTION[1];
            console.log(EMAIL)
        } else if (ACTION[0] == '') {

        }
        console.log(SUFFIX, ACTION);
    }

    return (
        <SafeAreaView>
            <Text>This is a basic SplashScreen</Text>
        </SafeAreaView>
    )
}

export default SplashScreen;