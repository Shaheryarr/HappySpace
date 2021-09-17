import React from 'react';
import { SafeAreaView, Text, View } from 'react-native';
import styles from './styles';

const GettingStarted = () => {
    //Functions Here

    return (
        <SafeAreaView style={styles.mainContainer}>
            <View style={styles.topContainer}>
                <Text>View 1</Text>
            </View>

            <View style={styles.bottomContainer}>
                <Text>Already Registered? <Text>Login</Text></Text>
            </View>
        </SafeAreaView>
    )
}

export default GettingStarted;