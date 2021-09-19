import React, {createRef, useRef, useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  TextInput,
} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';

import BottomSheet from 'reanimated-bottom-sheet';
import Animated from 'react-native-reanimated';

// import ImagePicker from 'react-native-image-crop-picker';
import styles from './styles';
import Buttons from '../../common/Buttons';
import {connect} from 'react-redux';

const Profile = ({user, navigation}) => {
  //Functions Here

  const takePhotoFromCamera = () => {
    // ImagePicker.openCamera({
    //   compressImageMaxWidth: 300,
    //   compressImageMaxHeight: 300,
    //   cropping: true,
    //   compressImageQuality: 0.7
    // }).then(image => {
    //   console.log(image);
    //   setImage(image.path);
    //   this.bs.current.snapTo(1);
    // });
  };

  const choosePhotoFromLibrary = () => {
    // ImagePicker.openPicker({
    //   width: 300,
    //   height: 300,
    //   cropping: true,
    //   compressImageQuality: 0.7
    // }).then(image => {
    //   console.log(image);
    //   setImage(image.path);
    //   this.bs.current.snapTo(1);
    // });
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
        <View style={{alignItems: 'center'}}>
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
                  borderRadius: 5,
                }}
                imageStyle={{borderRadius: 15}}>
                <View
                  style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Icon
                    name="camera"
                    size={35}
                    color="#fff"
                    style={{
                      opacity: 0.7,
                      alignItems: 'center',
                      justifyContent: 'center',
                      borderWidth: 1,
                      borderColor: '#fff',
                      borderRadius: 10,
                    }}
                  />
                </View>
              </ImageBackground>
            </View>
          </TouchableOpacity>
          <Text style={{marginTop: 10, fontSize: 18, fontWeight: 'bold'}}>
            {user?.name}
          </Text>
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
        <View style={{position: 'absolute', bottom: 5, alignSelf: 'center'}}>
          <Buttons title="LOGOUT" />
        </View>
      </Animated.View>
    </View>
  );
};
const mapStateToProps = ({user}) => ({user});
export default connect(mapStateToProps)(Profile);
