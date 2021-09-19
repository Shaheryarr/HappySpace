import React, { useEffect, useState } from 'react';
import {
    FlatList,
    SafeAreaView,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { postToRedux } from '../../../redux/actions';
import { getPosts } from '../../../SyncServices';
import Buttons from '../../common/Buttons';
import Post from './Post';
import styles from './styles';

const NewsFeed = ({ navigation }) => {
    const user = useSelector(state => state.user);
    const workspace = useSelector(state => state.workspace);
    const posts = useSelector(state => state.post);

    const dispatch = useDispatch();
    // const [posts, setPosts] = useState([
    //     {
    //         id: 12345,
    //         created_by: 'Hasan',
    //         email: 'mhasank999@gmail.com',
    //         image_url: '',
    //         content: 'This is my first post',
    //         created_at: '12-7-2021 8:52pm',
    //         updated_at: '12-7-2021 8:52pm',
    //         likes: 10,
    //     },
    //     {
    //         id: 12345,
    //         created_by: 'Shaheryar',
    //         email: 'sherryssj7@gmail.com',
    //         image_url: 'https://thumbor.forbes.com/thumbor/711x401/https://specials-images.forbesimg.com/imageserve/61055552b6d96ce71cdff7be/Apple-iPhone-13--iPhone-13-Pro--iPhone-13-Pro-Max--iPhone-13-Mini--new-iPhone/960x0.jpg?fit=scale',
    //         content: 'This is a post where I have uploaded an image',
    //         created_at: '12-7-2021 8:52pm',
    //         updated_at: '12-7-2021 8:52pm',
    //         likes: 23,
    //     }
    // ]);

    // const [comments, setComments] = useState([
    //     {
    //         id: 12,
    //         created_by: 'Shaheryar',
    //         content: 'This is a comment!',
    //         created_at: '12-7-2021 10:21pm'
    //     },
    //     {
    //         id: 12,
    //         created_by: 'Farooq',
    //         content: 'This is a second comment!',
    //         created_at: '12-7-2021 10:21pm'
    //     }
    // ])

    useEffect(() => {
        const PARAMS = {
            workspace_id: parseInt(workspace.workspace_id),
        };
        getPosts(PARAMS)
            .then(res => {
                dispatch(postToRedux(res)).then(res => {
                    console.log('res', res);
                });
            })
            .catch(err => {
                console.log('ERROR', err);
            });
    }, []);

    const handleProfile = () => {
        navigation.navigate('Profile');
    };

    const handleCreatePost = () => {
        navigation.navigate('CreatePost');
    };

    const renderItem = () => {
        return <Text>Post</Text>;
    };

    return (
        <>
            <SafeAreaView style={styles.notchContainer} />
            <SafeAreaView style={styles.mainContainer}>
                <View style={styles.headingContainer}>
                    <Text style={styles.heading}>{workspace?.workspace_name}</Text>

                    <TouchableOpacity
                        style={styles.profileContainer}
                        onPress={handleProfile}>
                        <Text style={styles.profileText}>
                            {user?.name?.substring(0, 1).toUpperCase()}
                        </Text>
                    </TouchableOpacity>
                </View>

                <FlatList
                    data={(posts.results).sort((a, b) => new Date(b.created_at) - new Date(a.created_at))}
                    renderItem={({ item, index }) => {
                        return (
                            <Post
                                item={item}
                                user={user}
                                navigation={navigation}
                            />
                        )
                    }}
                    ListFooterComponent={() => {
                        return (
                            <View style={styles.bottomList} />
                        )
                    }}
                />

                <View style={styles.fabContainer}>
                    <Buttons
                        type="primary"
                        title={'Create a Post'}
                        onPress={handleCreatePost}
                    />
                </View>
            </SafeAreaView>
        </>
    );
};

export default NewsFeed;
