import React, { useState, useEffect, useRef, forwardRef } from 'react';
import {
    SafeAreaView,
    View,
    Image,
    Text,
    TouchableOpacity,
    Dimensions,
    FlatList,
    KeyboardAvoidingView,
    Platform,
    Keyboard,
} from 'react-native';
import { useSelector } from 'react-redux';
import styles from './styles';
import Icon from 'react-native-vector-icons/EvilIcons';
import { themeStyleSheet } from '../../../constants';
import TextField from '../../common/TextField';
import { createComment, deletePostById, getPostById, likePostById, unlikePost } from '../../../SyncServices';
import { useToast } from 'native-base';

const { width } = Dimensions.get('screen');

const PostDetail = ({ navigation, route }) => {


    const [post, setPost] = useState(route.params.data);
    const [error, setError] = useState('');
    const [comment, setComment] = useState('');
    const [focus, setFocus] = useState(route.params.shouldComment)
    const [img, setImg] = useState(false);

    const user = useSelector(state => state.user);
    const workspace = useSelector(state => state.workspace);

    const Toast = useToast();

    useEffect(() => {
        getPost();
    }, [])

    const getPost = () => {
        const PARAMS = {
            workspace_id: workspace.workspace_id,
            post_id: post.id,
        }
        getPostById(PARAMS).then(res => {
            setPost({ ...res[0] });
        })
    }

    const deletePost = () => {
        const PARAMS = {
            post_id: parseInt(post.id),
        }
        deletePostById(PARAMS).then(res => {
            navigation.reset({
                routes: [
                    {
                        name: 'appRoutes',
                    }
                ]
            })
        })
    }

    const likePost = () => {
        const isLiked = (post.liked_by).find(x => x.email == user.email);
        if (isLiked) {
            const PARAMS = {
                post_id: post.id,
            }
            unlikePost(PARAMS).then(res => {
                getPost();
            }).catch(err => {
                Toast.show({
                    title: 'Something went wrong!'
                })
            })
        } else {
            const PARAMS = {
                post_id: post.id,
                workspace_id: workspace.workspace_id,
            }
            likePostById(PARAMS).then(res => {
                getPost();
            }).catch(err => {
                Toast.show({
                    title: 'Something went wrong!'
                })
            })
        }
    }

    const navigateToPost = () => {
        // setFocus(true)/
        ref.current.focus()
    }

    const addComment = () => {
        Keyboard.dismiss();
        const PARAMS = {
            post_id: post.id,
            workspace_id: workspace.workspace_id,
            content: comment
        }
        createComment(PARAMS).then(res => {
            setComment('');
            getPost();
        }).catch(err => {
            Toast.show({
                title: 'Something went wrong!'
            })
        })
    }

    return (
        <>
            <SafeAreaView style={styles.notchContainer} />
            <SafeAreaView style={styles.container}>
                <View style={styles.postContainer}>
                    <View style={styles.innerPost}>
                        <View style={styles.authorRow}>
                            <View style={styles.author}>
                                <TouchableOpacity style={styles.profileContainer}>
                                    <Text style={styles.profileText}>{post.created_by?.substring(0, 1).toUpperCase()}</Text>
                                </TouchableOpacity>
                                <Text style={styles.authorName}>{post.created_by}</Text>
                            </View>
                            {post.email == user?.email && (
                                <View style={styles.editDetails}>
                                    <Icon
                                        onPress={deletePost}
                                        name='trash'
                                        size={25}
                                        color={themeStyleSheet.red}
                                    />
                                </View>
                            )}
                        </View>
                        <Text style={{
                            ...styles.contentContainer,
                            fontSize: !post.image_url ? 20 : 14
                        }}>{post.content}</Text>
                        {post.image_url ? (
                            <TouchableOpacity
                                style={{ alignItems: 'center' }}
                            >
                                <Image
                                    source={{ uri: post.image_url }}
                                    height={100}
                                    width={150}
                                    resizeMode='contain'
                                    style={styles.img}
                                />
                            </TouchableOpacity>
                        ) : null}
                        <View style={styles.likeCommentContainer}>
                            <TouchableOpacity
                                onPress={likePost}
                                style={styles.likeBtn}
                            >
                                <Icon
                                    name='like'
                                    size={25}
                                    color={(post.liked_by).find(x => x.email == user.email) ? themeStyleSheet.mainColor : null}
                                />
                                <Text
                                    style={{
                                        color: (post.liked_by).find(x => x.email == user.email) ? themeStyleSheet.mainColor : null,
                                        fontWeight: (post.liked_by).find(x => x.email == user.email) && 'bold',
                                    }}
                                >{'Like'}</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                onPress={navigateToPost}
                                style={styles.likeBtn}
                            >
                                <Icon
                                    name='comment'
                                    size={25}
                                />
                                <Text>{'Comment'}</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.reactionInfo}>
                            <View
                                style={{
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                    width: '90%',
                                    justifyContent: 'space-between',
                                    alignSelf: 'center',
                                    paddingBottom: 12,
                                }}
                            >
                                <View style={styles.align}>
                                    <Icon
                                        name='like'
                                        size={20}
                                        color={themeStyleSheet.mainColor}
                                    />
                                    <Text>{post.liked_by.length}</Text>
                                </View>
                            </View>
                        </View>
                        {post.commented_by.length > 0 ? (
                            <View style={{
                                flex: 1,
                                alignItems: 'center',
                                marginTop: 10,
                            }}>
                                <FlatList
                                    showsVerticalScrollIndicator={false}
                                    data={post.commented_by}
                                    renderItem={({ item }) => {
                                        return (
                                            <View
                                                style={{
                                                    flexDirection: 'row',
                                                    alignItems: "center",
                                                    marginBottom: 15
                                                }}
                                            >
                                                <View
                                                    style={{
                                                        height: 35,
                                                        width: 35,
                                                        justifyContent: 'center',
                                                        alignItems: "center",
                                                        backgroundColor: themeStyleSheet.mainColor,
                                                        borderRadius: 20
                                                    }}
                                                >
                                                    <Text
                                                        style={{
                                                            color: themeStyleSheet.white,
                                                        }}
                                                    >{item.created_by.substring(0, 1).toUpperCase()}</Text>
                                                </View>
                                                <View
                                                    style={{
                                                        marginLeft: 15,
                                                        backgroundColor: themeStyleSheet.extraLightGray,
                                                        width: '85%',
                                                        paddingVertical: 10,
                                                        borderRadius: 10,

                                                    }}
                                                >
                                                    <Text
                                                        style={{
                                                            marginLeft: 5,
                                                            fontWeight: 'bold',
                                                            marginBottom: 5,
                                                        }}
                                                    >{item.created_by}</Text>
                                                    <Text
                                                        style={{
                                                            marginLeft: 5,
                                                        }}
                                                    >{item.content}</Text>
                                                </View>
                                            </View>
                                        )
                                    }}
                                />
                            </View>
                        ) : (
                            <View
                                style={{
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    marginTop: 40
                                }}
                            >
                                <Text
                                    style={{
                                        fontSize: 16,
                                        fontWeight: 'bold'
                                    }}
                                >Be the first to comment on this post!</Text>
                            </View>
                        )}
                    </View>
                    <KeyboardAvoidingView
                        behavior={Platform.OS == 'ios' ? 'padding' : undefined}
                        keyboardVerticalOffset={45}
                        style={{
                            width: width * 0.9,
                            alignSelf: 'center',
                            flexDirection: 'row',
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}
                    >
                        <TextField
                            label='Comment'
                            placeholder='Enter comment here..'
                            customWidth={width * 0.7}
                            error={error}
                            onChange={(text) => setComment(text)}
                            multiline={true}
                            autoFocus={focus}
                            value={comment}
                        />
                        <TouchableOpacity
                            onPress={addComment}
                            style={{
                                marginLeft: 10,
                                width: '20%',
                                alignItems: 'center',
                                justifyContent: 'center',
                                backgroundColor: themeStyleSheet.mainColor,
                                height: 40,
                                borderRadius: 20,
                                marginBottom: 10
                            }}
                        >
                            <Text
                                style={{
                                    color: themeStyleSheet.white
                                }}
                            >ADD</Text>
                        </TouchableOpacity>
                    </KeyboardAvoidingView>
                </View>
            </SafeAreaView>
        </>
    )
}

export default PostDetail;