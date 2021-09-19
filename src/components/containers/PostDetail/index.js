import React, { useState, useEffect, useRef } from 'react';
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
    TouchableWithoutFeedback,
    Keyboard
} from 'react-native';
import { useSelector } from 'react-redux';
import styles from './styles';
import Icon from 'react-native-vector-icons/EvilIcons';
import { themeStyleSheet } from '../../../constants';
import TextField from '../../common/TextField';

const { width } = Dimensions.get('screen');

const PostDetail = ({ navigation, route }) => {

    // const ref = useRef();

    const [post, setPost] = useState(route.params.data);
    const [error, setError] = useState('');
    const [comment, setComment] = useState('');
    const [focus, setFocus] = useState(route.params.shouldComment)

    const user = useSelector(state => state.user);


    useEffect(() => {
        // ref.current.setValue('asd');
    }, [])

    const editPost = () => {

    }

    const deletePost = () => {

    }

    const likePost = () => {

    }

    const navigateToPost = () => {

    }

    const addComment = () => {

    }

    return (
        <>
            <SafeAreaView style={styles.notchContainer} />
            <SafeAreaView style={styles.container}>
                <TouchableWithoutFeedback
                    onPress={() => Keyboard.dismiss()}
                    style={{ flex: 1 }}
                >
                    <View style={styles.postContainer}>
                        <View style={styles.innerPost}>
                            <View style={styles.authorRow}>
                                <View style={styles.author}>
                                    <TouchableOpacity style={styles.profileContainer}>
                                        <Text style={styles.profileText}>{post.created_by.substring(0, 1).toUpperCase()}</Text>
                                    </TouchableOpacity>
                                    <Text style={styles.authorName}>{post.created_by}</Text>
                                </View>
                                {post.email == user?.email && (
                                    <View style={styles.editDetails}>
                                        <Icon
                                            onPress={editPost}
                                            name='pencil'
                                            size={25}
                                        />
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
                                    onPress={() => setImg(true)}
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
                                    />
                                    <Text>{'Like'}</Text>
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
                                <FlatList />
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
                            />
                            <TouchableOpacity
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
                </TouchableWithoutFeedback>
            </SafeAreaView>
        </>
    )
}

export default PostDetail;