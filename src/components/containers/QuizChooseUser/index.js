import { useToast } from 'native-base';
import React, { useState } from 'react';
import { FlatList, SafeAreaView, Text, TouchableOpacity, View, Image } from 'react-native';
import { isInternetConnected } from '../../../constants';
import { getQuizQuestions } from '../../../SyncServices';
import Buttons from '../../common/Buttons';
import CustomHeader from '../../common/CustomHeader';
import styles from './styles';

const QuizChooseUser = ({ navigation, route }) => {

    const { params } = route;
    const Toast = useToast();

    const [players, setPlayers] = useState(params.players || []);
    const [selectedPlayer, setSelectedPlayer] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleBackAction = () => {
        navigation.goBack()
    }

    const handleContinue = () => {
        isInternetConnected().then(() => {
            setLoading(true)

            getQuizQuestions(selectedPlayer.email).then(res => {
                const { questionare } = res;

                setLoading(false)
            }).catch(err => {
                setLoading(false)

                Toast.show({
                    title: 'Error in getting quiz questions'
                })
            })
        }).catch(err => {
            Toast.show({
                title: 'Internet connection is required'
            })
        })
    }

    const renderItem = ({ item, index }) => {
        const exists = item.user_id == selectedPlayer.user_id;
        return (
            <TouchableOpacity style={exists ? styles.listItemContainerSelected : styles.listItemContainer} onPress={() => setSelectedPlayer(item)}>
                <View style={styles.listItemInitialContainer}>
                    <View style={exists ? styles.listItemInitialSelected : styles.listItemInitial}>
                        {item.image_url ? (
                            <Image source={{ uri: item.image_url }} style={styles.image} resizeMode='stretch' />
                        ) : (
                            <Text style={styles.listMainText}>
                                {item.name.substring(0, 1).toUpperCase()}
                            </Text>
                        )}
                    </View>
                </View>

                <View style={styles.listItemMainContainer}>
                    <Text>{item.name}</Text>
                </View>
            </TouchableOpacity>
        )
    }

    return (
        <>
            <SafeAreaView style={styles.notchContainer} />
            <SafeAreaView style={styles.mainContainer}>
                <CustomHeader firstIcon={'chevron-left'} onPressFirstIcon={handleBackAction} />

                <View style={styles.headingContainer}>
                    <Text style={styles.heading}>Select a Colleague</Text>
                    <Text>The following colleagues have set up their quiz for you. Please select one to continue</Text>
                </View>

                <FlatList
                    data={players}
                    keyExtractor={(item, index) => item.user_id}
                    contentContainerStyle={{ padding: 10 }}
                    renderItem={renderItem}
                />

                <View style={styles.buttonContainer}>
                    <Buttons type='primary' title='Continue' disabled={selectedPlayer ? false : true} loading={loading} onPress={handleContinue} />
                </View>
            </SafeAreaView>
        </>
    )
}

export default QuizChooseUser;