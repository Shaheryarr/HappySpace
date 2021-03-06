import React, {createRef, useEffect, useRef, useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  Pressable,
  Dimensions,
  TextInput,
} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MIcon from 'react-native-vector-icons/MaterialIcons';

import BottomSheet from 'reanimated-bottom-sheet';
import Animated from 'react-native-reanimated';
import {useToast} from 'native-base';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import styles from './styles';
import Buttons from '../../common/Buttons';
import {connect} from 'react-redux';
import {
  handleLogout,
  isInternetConnected,
  themeStyleSheet,
} from '../../../constants';
import {postImageBase64, updateUser} from '../../../SyncServices';
import {setUser} from '../../../redux/actions';
import Modal from 'react-native-modal';

const {height, width} = Dimensions.get('window');

const config = {
  mediaType: 'photo',
  includeBase64: true,
  quality: 0.1,
};

const Profile = ({user, workspace, navigation, dispatch}) => {
  const Toast = useToast();
  const [image, setImage] = useState(undefined);
  const [nameModal, setNameModal] = useState(false);
  const [name, setName] = useState(user?.name);
  const takePhotoFromCamera = () => {
    launchCamera(config, res => {
      const {assets} = res;

      if (assets?.length) {
        setImage(assets[0]);
      }
    });
  };

  const choosePhotoFromLibrary = () => {
    launchImageLibrary(config, res => {
      const {assets} = res;

      if (assets?.length) {
        setImage(assets[0]);
        console.log(assets[0]);
      }
    });
  };

  useEffect(() => {
    handleSave();
    return () => {};
  }, [image]);

  const handleSave = () => {
    if (image) {
      let params = {
        image_name: image.base64,
      };
      isInternetConnected()
        .then(() => {
          postImageBase64(params).then(res => {
            const {message: {image_url = ''} = {image_url: ''}} = res;
            updateUser({image_url})
              .then(res => {
                dispatch(setUser({...user, image_url})).then(() => {
                  Toast.show({title: 'Image uploaded successfully'});
                  setImage(undefined);
                });
              })
              .catch(() =>
                Toast.show({
                  title: 'Error while uploading image',
                }),
              );
          });
        })
        .catch(err =>
          Toast.show({
            title: 'Please connect to the internet',
          }),
        );
    }
  };

  const updateName = () => {
    let param = {
      name,
    };

    updateUser(param).then(() => {
      setNameModal(false);
      dispatch(setUser({...user, name}));
    });
  };

  const renderInner = () => (
    <View style={styles.panel}>
      <View style={{alignItems: 'center'}}>
        <Text style={styles.panelTitle}>Upload Photo</Text>
        <Text style={styles.panelSubtitle}>Choose Your Profile Picture</Text>
      </View>
      <Buttons
        type="primary"
        title="Take Photo"
        onPress={takePhotoFromCamera}
      />
      <View style={{marginVertical: 5}} />
      <Buttons
        type="primary"
        title="Choose From Library"
        onPress={choosePhotoFromLibrary}
      />
      <View style={{marginVertical: 5}} />
      <Buttons
        type="secondary"
        title="Cancel"
        onPress={() => bs.current.snapTo(1)}
      />
    </View>
  );

  const renderHeader = () => (
    <View style={styles.header}>
      <View style={styles.panelHeader}>
        <View style={styles.panelHandle} />
      </View>
    </View>
  );

  const bs = createRef();
  const fall = useRef(new Animated.Value(1));

  return (
    <View style={styles.container}>
      <BottomSheet
        ref={bs}
        snapPoints={[330, 0]}
        renderContent={renderInner}
        renderHeader={renderHeader}
        initialSnap={1}
        callbackNode={fall.current}
        enabledGestureInteraction={true}
      />
      <Animated.View
        style={{
          margin: 20,
          flex: 1,
          opacity: Animated.add(0.1, Animated.multiply(fall.current, 1.0)),
        }}>
        <View style={{alignItems: 'center', paddingVertical: 20}}>
          <TouchableOpacity onPress={() => bs.current.snapTo(0)}>
            <View
              style={{
                height: 100,
                width: 100,
                borderRadius: 15,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <ImageBackground
                source={{
                  uri: user?.image_url,
                }}
                style={{
                  height: 100,
                  width: 100,
                  backgroundColor: 'grey',
                  borderRadius: 15,
                }}
                imageStyle={{borderRadius: 15}}>
                <View
                  style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  {!user?.image_url && (
                    <Text
                      style={{
                        color: 'white',
                        fontSize: 60,
                        fontWeight: 'bold',
                      }}>
                      {user?.name?.substring(0, 1).toUpperCase()}
                    </Text>
                  )}
                  <Icon
                    name="camera"
                    size={30}
                    color="#fff"
                    style={{
                      position: 'absolute',
                      bottom: 3,
                      right: 4,
                      alignItems: 'center',
                      justifyContent: 'center',
                      //   borderWidth: 1,
                      //   borderColor: '#fff',
                      borderRadius: 10,
                    }}
                  />
                </View>
              </ImageBackground>
            </View>
          </TouchableOpacity>
          <Text style={{marginTop: 20, fontSize: 18, fontWeight: 'bold'}}>
            {user?.name}
          </Text>

          <TouchableOpacity
            style={{marginTop: 10}}
            onPress={() => setNameModal(true)}>
            <Text
              style={{
                color: themeStyleSheet.skyBlue,
                textDecorationLine: 'underline',
              }}>
              Edit
            </Text>
          </TouchableOpacity>
        </View>

        <View style={styles.action}>
          <FontAwesome name="envelope-o" color={'black'} size={20} />
          <Text
            style={[
              styles.textInput,
              {
                color: 'black',
              },
            ]}>
            {user?.email}
          </Text>
        </View>
        <Pressable
          onPress={() => navigation.navigate('LeaderBoard')}
          style={styles.action}>
          <MIcon name="leaderboard" color={'black'} size={20} />
          <Text
            style={[
              styles.textInput,
              {
                color: 'black',
              },
            ]}>
            LeaderBoard
          </Text>
          <Icon name="chevron-right" size={30} />
        </Pressable>
        <Pressable
          onPress={() =>
            navigation.navigate('AddMembers', {
              workspace: {
                workspace_id: workspace.workspace_id,
                workspace_name: workspace.workspace_name,
              },
            })
          }
          style={styles.action}>
          <FontAwesome name="user-o" color={'black'} size={20} />
          <Text
            style={[
              styles.textInput,
              {
                color: 'black',
              },
            ]}>
            Invite Members
          </Text>
          <Icon name="chevron-right" size={30} />
        </Pressable>
        <Pressable
          onPress={() =>
            navigation.navigate('SelectWorkspace', {
              workspaces: user.workspaces,
            })
          }
          style={styles.action}>
          <Icon name="network-outline" color={'black'} size={20} />
          <Text
            style={[
              styles.textInput,
              {
                color: 'black',
              },
            ]}>
            Switch Workspace
          </Text>
          <Icon name="chevron-right" size={30} />
        </Pressable>
        <View style={{position: 'absolute', bottom: 5, alignSelf: 'center'}}>
          <Buttons
            onPress={() => handleLogout(dispatch, navigation)}
            title="LOGOUT"
          />
        </View>
      </Animated.View>

      <Modal isVisible={nameModal} style={{margin: 0}}>
        <View
          style={{flex: 1, justifyContent: 'flex-end', alignItems: 'center'}}>
          <View
            style={{
              height: height * 0.3,
              width,
              backgroundColor: themeStyleSheet.white,
              justifyContent: 'space-around',
              alignItems: 'center',
            }}>
            <View
              style={{
                width: '90%',
                borderBottomWidth: 1,
                borderColor: themeStyleSheet.lightgray,
              }}>
              <TextInput
                placeholder={'Enter Name'}
                value={name}
                autoFocus={true}
                onChangeText={text => setName(text)}
                style={{fontSize: 16}}
              />
            </View>

            <View
              style={{
                height: height * 0.15,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Buttons type="primary" title="Save" onPress={updateName} />
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};
const mapStateToProps = ({user, workspace}) => ({user, workspace});
export default connect(mapStateToProps)(Profile);
