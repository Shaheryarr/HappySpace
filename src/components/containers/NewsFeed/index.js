import React, { useState } from 'react';
import { FlatList, SafeAreaView, Text, TouchableOpacity, View } from 'react-native';
import { useSelector } from 'react-redux';
import Buttons from '../../common/Buttons';
import styles from './styles';

const NewsFeed = ({ navigation }) => {

    const user = useSelector(state => state.user);
    const workspace = useSelector(state => state.workspace);

    const [posts, setPosts] = useState([]);

    const handleProfile = () => {
        navigation.navigate('Profile')
    }

    const handleCreatePost = () => {
        navigation.navigate('CreatePost')
    }

    const renderItem = () => {
        return (
            <Text>Post</Text>
        )
    }

    return (
        <>
            <SafeAreaView style={styles.notchContainer} />
            <SafeAreaView style={styles.mainContainer}>
                <View style={styles.headingContainer}>
                    <Text style={styles.heading}>News Feed</Text>

                    <TouchableOpacity style={styles.profileContainer} onPress={handleProfile}>
                        <Text style={styles.profileText}>{user.name.substring(0, 1).toUpperCase()}</Text>
                    </TouchableOpacity>
                </View>

                <FlatList
                    data={posts}
                    renderItem={renderItem}
                />

                <View style={styles.fabContainer}>
                    <Buttons type='primary' title={'Create a Post'} onPress={handleCreatePost} />
                </View>
            </SafeAreaView>
        </>
    )
}

export default NewsFeed;