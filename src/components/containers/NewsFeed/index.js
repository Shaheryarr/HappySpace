import React, { useEffect, useState } from 'react';
import {
    FlatList,
    RefreshControl,
    Image,
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
    const [isRefresh, setRefresh] = useState(false);

    const dispatch = useDispatch();

    useEffect(() => {
        getData();
    }, []);

    const getData = () => {
        setRefresh(true);
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
            }).finally(() => {
                setRefresh(false);
            })
    }

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

                {posts.results.length > 0 ? (
                    <FlatList
                        refreshControl={<RefreshControl
                            colors={["#9Bd35A", "#689F38"]}
                            refreshing={isRefresh}
                            onRefresh={getData} />}
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
                ) : (
                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                        <Image source={require('../../../assets/images/image3.png')} resizeMode='contain' style={{ height: 200, width: 200, top: -50 }} />

                        <Text style={{ fontSize: 16 }}>Nothing new on the feed</Text>
                        <Text style={{ fontSize: 16, fontWeight: '500' }}>Add your first post here</Text>
                    </View>
                )}

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
