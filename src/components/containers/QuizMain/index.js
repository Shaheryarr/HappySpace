import { useToast } from 'native-base';
import React, { useEffect, useState } from 'react';
import { SafeAreaView, Text, View, Image, TouchableOpacity, BackHandler, Alert } from 'react-native';
import { isInternetConnected, themeStyleSheet } from '../../../constants';
import { postQuizAnswers } from '../../../SyncServices';
import Buttons from '../../common/Buttons';
import CustomHeader from '../../common/CustomHeader';
import styles from './styles';
import Modal from 'react-native-modal';

const QuizMain = ({ navigation, route }) => {

    const { params } = route;
    const Toast = useToast;

    const [questionare, setQuestionare] = useState(params.questionare);
    const [player, setPlayer] = useState(params.player);
    const [questionNumber, setQuestionNumber] = useState(0);
    const [selectedOptionId, setSelectedOptionId] = useState(false);
    const [loading, setLoading] = useState(false);
    const [successCount, setSuccessCount] = useState(0);
    const [failCount, setFailCount] = useState(0);
    const [successModal, setSuccessModal] = useState(false);
    const [failModal, setFailModal] = useState(false);
    const [resultModal, setrResultModal] = useState(false);

    useEffect(() => {
        const backHandler = BackHandler.addEventListener('hardwareBackPress', handleBackAction)

        return () => backHandler.remove();
    }, [])

    const handleBackAction = () => {
        Alert.alert('End Quiz', 'Are you sure you want to end the quiz?', [{
            text: 'No',
            onPress: () => console.log("Cancel Pressed"),
            style: "cancel"
        }, {
            text: 'Yes',
            onPress: () => handleEndQuiz()
        }])
    }

    const handleEndQuiz = () => {
        setrResultModal(true)
    }

    const handleDone = () => {
        navigation.navigate('QuizDashboard')
    }

    const handleSubmit = () => {
        isInternetConnected().then(() => {
            setLoading(true)

            let params = {
                question_id: questionare[questionNumber].question_id,
                option_id: selectedOptionId,
                answered_for: player.email
            }

            postQuizAnswers(params).then(() => {
                if (selectedOptionId == questionare[questionNumber].correct_answer_id) {
                    // alert('success')
                    setSuccessCount(successCount => successCount + 1)
                    handleNextQuestion()
                } else {
                    // alert('fail')
                    setFailCount(failCount => failCount + 1)
                    handleNextQuestion()
                }
            }).catch(err => {
                setLoading(false)

                Toast.show({
                    title: 'Failed to verify answer'
                })
            })
        }).catch(err => {
            Toast.show({
                title: 'Please connect to the internet'
            })
        })
    }

    const handleNextQuestion = () => {
        if (questionNumber == questionare.length - 1) {
            handleEndQuiz()
        } else {
            setQuestionNumber(questionNumber => questionNumber + 1);
            setSelectedOptionId(false)
        }

        setLoading(false)
    }

    return (
        <>
            <SafeAreaView style={styles.notchContainer} />
            <SafeAreaView style={styles.mainContainer}>
                <CustomHeader firstIcon={'chevron-left'} onPressFirstIcon={handleBackAction} />

                <View style={styles.imageContainer}>
                    {player.image_url ? (
                        <View style={styles.headerContainer}>
                            <View style={styles.imageSubContainer}>
                                <Image source={{ uri: player.image_url }} style={styles.image} resizeMode='contain' />
                            </View>

                            <Text style={styles.name}>{player.name}</Text>
                        </View>
                    ) : (
                        <View style={styles.headerContainer}>
                            <View style={styles.imageSubContainer}>
                                <Text>{player.name.substring(0, 1).toUpperCase()}</Text>
                            </View>

                            <Text style={styles.name}>{player.name}</Text>
                        </View>
                    )}
                </View>

                <View style={styles.questionContainer}>
                    <Text style={styles.question}>{questionare[questionNumber].question}</Text>
                </View>

                <View style={styles.answerContainer}>
                    <View style={styles.answerRow}>
                        <TouchableOpacity style={selectedOptionId == questionare[questionNumber].options[0].option_id ? styles.answerTabActive : styles.answerTab} onPress={() => setSelectedOptionId(questionare[questionNumber].options[0].option_id)}>
                            <Text style={styles.answerText}>{questionare[questionNumber].options[0].option_text}</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={selectedOptionId == questionare[questionNumber].options[1].option_id ? styles.answerTabActive : styles.answerTab} onPress={() => setSelectedOptionId(questionare[questionNumber].options[1].option_id)}>
                            <Text style={styles.answerText}>{questionare[questionNumber].options[1].option_text}</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.answerRow}>
                        <TouchableOpacity style={selectedOptionId == questionare[questionNumber].options[2].option_id ? styles.answerTabActive : styles.answerTab} onPress={() => setSelectedOptionId(questionare[questionNumber].options[2].option_id)}>
                            <Text style={styles.answerText}>{questionare[questionNumber].options[2].option_text}</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={selectedOptionId == questionare[questionNumber].options[3].option_id ? styles.answerTabActive : styles.answerTab} onPress={() => setSelectedOptionId(questionare[questionNumber].options[3].option_id)}>
                            <Text style={styles.answerText}>{questionare[questionNumber].options[3].option_text}</Text>
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={styles.buttonContainer}>
                    <Buttons type={'primary'} title='Submit' disabled={selectedOptionId ? false : true} loading={loading} onPress={handleSubmit} />
                </View>
            </SafeAreaView>

            <Modal isVisible={resultModal} style={{ margin: 0 }}>
                <View style={{ flex: 1, backgroundColor: themeStyleSheet.white, justifyContent: 'center', alignItems: 'center' }}>
                    <View style={styles.imageContainer}>
                        {player.image_url ? (
                            <View style={styles.headerContainer}>
                                <View style={styles.imageSubContainer}>
                                    <Image source={{ uri: player.image_url }} style={styles.image} resizeMode='contain' />
                                </View>

                                <Text style={styles.name}>{player.name}</Text>
                            </View>
                        ) : (
                            <View style={styles.headerContainer}>
                                <View style={styles.imageSubContainer}>
                                    <Text>{player.name.substring(0, 1).toUpperCase()}</Text>
                                </View>

                                <Text style={styles.name}>{player.name}</Text>
                            </View>
                        )}
                    </View>

                    <View>
                        <Text style={{fontSize: 24, fontWeight: '500'}}>Congratulations!</Text>
                    </View>

                    <View style={{marginTop: 20}}>
                        <Text style={{fontSize: 18, width: '90%', textAlign: 'center'}}>You answered {successCount} correct answers out of {successCount + failCount}</Text>
                        <Text style={{marginTop: 10, width: '90%', textAlign: 'center'}}>Come back soon to answer more of {player.name}'s questions</Text>
                    </View>

                    <View style={styles.modalButtonContainer}>
                        <Buttons type='primary' title='Done' onPress={handleDone} />
                    </View>
                </View>
            </Modal>
        </>
    )
}

export default QuizMain;