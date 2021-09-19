import React, { useState } from 'react';
import {
    View,
    Text,
    Image,
    TouchableOpacity,
    Dimensions
} from 'react-native';
import Modal from 'react-native-modal';
import { themeStyleSheet } from '../../../constants';
import styles from './styles';
import Icon from 'react-native-vector-icons/EvilIcons';
import { deletePostById } from '../../../SyncServices';

const { width } = Dimensions.get('screen')

const Post = ({
    item,
    user
}) => {

    const [img, setImg] = useState(false);

    const editPost = () => {

    }
    
    const deletePost = () => {
        const PARAMS = {
            post_id: parseInt(item.id),
        }
        deletePostById(PARAMS).then(res => {

        })
    }

    const navigateToPost = () => {

    }

    const likePost = () => {

    }

    return (
        <>
            <TouchableOpacity
                onPress={navigateToPost}
                style={styles.postContainer}
            >
                <View style={styles.innerPost}>
                    <View style={styles.authorRow}>
                        <View style={styles.author}>
                            <TouchableOpacity style={styles.profileContainer}>
                                <Text style={styles.profileText}>{item.created_by.substring(0, 1).toUpperCase()}</Text>
                            </TouchableOpacity>
                            <Text style={styles.authorName}>{item.created_by}</Text>
                        </View>
                        {item.email == user?.email && (
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
                    <Text style={styles.contentContainer}>{item.content}</Text>
                    {item.image_url ? (
                        <TouchableOpacity
                            onPress={() => setImg(true)}
                        >
                            <Image
                                source={{ uri: item.image_url }}
                                height={100}
                                width={150}
                                resizeMode='contain'
                                style={styles.img}
                            />
                        </TouchableOpacity>
                    ) : null}
                    <View style={styles.reactionInfo}>
                        <View style={styles.align}>
                            <Icon
                                name='like'
                                size={20}
                                color={themeStyleSheet.mainColor}
                            />
                            <Text>{item.liked_by.length}</Text>
                        </View>
                        <View>
                            <Text>{`${item.commented_by.length} comments`}</Text>
                        </View>
                    </View>
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
                        <View style={styles.likeBtn}>
                            <Icon
                                name='comment'
                                size={25}
                            />
                            <Text>{'Comment'}</Text>
                        </View>
                    </View>
                </View>
            </TouchableOpacity>
            <Modal
                isVisible={img}
                style={{ margin: 0 }}
                onBackdropPress={() => setImg(false)}
                onBackButtonPress={() => setImg(false)}
                useNativeDriver
            >
                <View style={styles.modalContainer}>
                    <Image
                        source={{ uri: item.image_url }}
                        height={150}
                        width={150}
                        resizeMode='contain'
                        style={styles.img}
                    ></Image>
                </View>
            </Modal>
        </>
    )
}

export default Post;