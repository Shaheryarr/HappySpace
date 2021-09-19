import React from 'react';
import { SafeAreaView, Text, View } from 'react-native';
import Buttons from '../../common/Buttons';
import CustomHeader from '../../common/CustomHeader';
import styles from './styles';

const QuizDashboard = ({ navigation }) => {
    
    const handleBackAction = () => {
        navigation.goBack()
    }

    return (
        <>
            <SafeAreaView style={styles.notchContainer} />
            <SafeAreaView style={styles.mainContainer}>
                <CustomHeader firstIcon={'chevron-left'} onPressFirstIcon={handleBackAction} leaderboard />

                <View style={styles.mainContainer}>
                    <View style={styles.imageContainer}>
                        <Text>Image Here</Text>
                    </View>

                    <View style={styles.headingContainer}>
                        <Text style={styles.heading}>Who knows you better?</Text>
                        <Text style={{marginBottom: 5}}>Answer questions about yourself and see how well your colleagues know you</Text>
                        <Text>You can also attempt quizzes setup by other employees</Text>
                    </View>

                    <View style={styles.buttonContainer}>
                        <Buttons type='secondary' title='Setup your own quiz' />
                        
                        <View style={styles.secondButton}>
                            <Buttons type='primary' title='Play Quiz' />
                        </View>
                    </View>
                </View>
            </SafeAreaView>
        </>
    )
}

export default QuizDashboard;