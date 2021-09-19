import { useToast } from 'native-base';
import React, { useState } from 'react';
import { Image, SafeAreaView, Text, View } from 'react-native';
import { useSelector } from 'react-redux';
import { isInternetConnected } from '../../../constants';
import { getSetQuestions, getUserQuizDetails } from '../../../SyncServices';
import Buttons from '../../common/Buttons';
import CustomHeader from '../../common/CustomHeader';
import styles from './styles';

const QuizDashboard = ({ navigation }) => {

    const [loading, setLoading] = useState(false);
    const [setupLoading, setSetupLoading] = useState(false);
    const [playLoading, setPlayLoading] = useState(false);

    const workspace = useSelector(state => state.workspace);
    const Toast = useToast();

    const handleBackAction = () => {
        navigation.goBack()
    }

    const handleSetupQuestions = () => {
        isInternetConnected().then(() => {
            setLoading(true)
            setSetupLoading(true)

            getSetQuestions().then(res => {
                const { questionare } = res;

                setLoading(false)
                setSetupLoading(false)

                navigation.navigate('QuizSetQuestions', {
                    questionare
                })
            }).catch(err => {
                Toast.show({
                    title: 'Error in getting quiz details'
                })

                setLoading(false)
                setSetupLoading(false)
            })
        }).catch(err => {
            Toast.show({
                title: 'Internet connection not found'
            })
        })
    }

    const handlePlayQuiz = () => {
        isInternetConnected().then(() => {
            setLoading(true)
            setPlayLoading(true)

            getUserQuizDetails(workspace.workspace_id.toString()).then(res => {
                navigation.navigate('QuizChooseUser', {
                    players: res
                })

                setLoading(false)
                setPlayLoading(false)
            }).catch(err => {
                Toast.show({
                    title: 'Error in getting quiz details'
                })

                setLoading(false)
                setPlayLoading(false)
            })
        }).catch(err => {
            Toast.show({
                title: 'Internet connection not found'
            })
        })
    }

    return (
        <>
            <SafeAreaView style={styles.notchContainer} />
            <SafeAreaView style={styles.mainContainer}>
                <CustomHeader firstIcon={'chevron-left'} onPressFirstIcon={handleBackAction} leaderboard />

                <View style={styles.mainContainer}>
                    <View style={styles.imageContainer}>
                        <Image source={require('../../../assets/images/image1.png')} resizeMode='contain' style={{ height: 350, width: 350 }} />
                    </View>

                    <View style={styles.headingContainer}>
                        <Text style={styles.heading}>Who knows you better?</Text>
                        <Text style={{ marginBottom: 5 }}>Answer questions about yourself and see how well your colleagues know you</Text>
                        <Text>You can also attempt quizzes setup by other employees</Text>
                    </View>

                    <View style={styles.buttonContainer}>
                        <Buttons type='secondary' title='Setup your own quiz' loading={setupLoading} onPress={handleSetupQuestions} />

                        <View style={styles.secondButton}>
                            <Buttons type='primary' title='Play Quiz' loading={playLoading} onPress={handlePlayQuiz} />
                        </View>
                    </View>
                </View>
            </SafeAreaView>
        </>
    )
}

export default QuizDashboard;