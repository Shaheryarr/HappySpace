import React from 'react';
import { SafeAreaView, Text, View } from 'react-native';
import styles from './styles';
import Button from '../../common/Buttons';

const GettingStarted = () => {
    //Functions Here

    return (
        <SafeAreaView style={styles.mainContainer}>
            <View style={styles.topContainer}>
                <Text>View 1</Text>

                <View style={styles.buttonContainer}>
                    <Button title={'Create Your Own Workspace'} />
                </View>
            </View>

            <View style={styles.bottomContainer}>
                <Text style={styles.subText}>Already Registered? <Text style={styles.mainText}>Login</Text></Text>
            </View>
        </SafeAreaView>
    )
}

export default GettingStarted;