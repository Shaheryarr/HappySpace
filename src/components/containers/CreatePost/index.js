import React, { useState } from 'react';
import { SafeAreaView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { useSelector } from 'react-redux';
import CustomHeader from '../../common/CustomHeader';
import styles from './styles';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const CreatePost = ({ navigation }) => {

    const [text, setText] = useState('');

    const user = useSelector(state => state.user);

    const handleBackAction = () => {
        navigation.goBack()
    }

    const handleImage = () => {
        alert('Imnage')
    }

    return (
        <>
            <SafeAreaView style={styles.notchContainer} />
            <SafeAreaView style={styles.mainContainer}>
                <CustomHeader firstIcon={'chevron-left'} onPressFirstIcon={handleBackAction} save={text ? true : false} title={'Create a Post'} />

                <View style={styles.postContainer}>
                    <View style={styles.postFirstRow}>
                        <View style={styles.initialContainer}>
                            <Text style={styles.initialText}>{user.name.substring(0, 1).toUpperCase()}</Text>
                        </View>
                    </View>

                    <View style={styles.postSecondRow}>
                        <TextInput
                            placeholder={`Hey ${user.name}! What's new?`}
                            style={styles.textInputContainer}
                            multiline
                            maxLength={200}
                            onChangeText={(text) => setText(text)}
                        />
                    </View>
                </View>

                <TouchableOpacity style={styles.uploadImageContainer} onPress={handleImage}>
                    <View style={styles.uploadImageIconContainer}>
                        <View style={styles.uploadImageIcon}>
                            <Icon name={'plus'} size={40} style={styles.icon} />
                        </View>
                    </View>
                    <Text style={styles.imageText}>Add Image</Text>
                </TouchableOpacity>
            </SafeAreaView>
        </>
    )
}

export default CreatePost;