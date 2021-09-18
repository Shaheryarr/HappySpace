import {Toast} from 'native-base';
import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  Text,
  View,
  Dimensions,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import {useDispatch} from 'react-redux';
import {
  EMAIL_PATTERN,
  isInternetConnected,
  themeStyleSheet,
} from '../../../constants';
import {setWorkspaceData} from '../../../redux/actions';
import {createWorkspace} from '../../../SyncServices';
import Buttons from '../../common/Buttons';
import OutlineContainer from '../../common/OutlineContainer';
import TextField from '../../common/TextField';
import styles from './styles';

const {width, height} = Dimensions.get('screen');

const AddWorkspace = ({navigation}) => {
  const dispatch = useDispatch();
  const [workspace, setWorkspace] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const onChange = text => {
    setError('');
    setWorkspace(text);
  };

  const validateInput = () => {
    let isValid = true;
    let obj = '';
    if (workspace) {
    } else {
      isValid = false;
      obj = 'Workspace is required';
    }

    if (isValid == true) return isValid;
    else return obj;
  };

  const addWorkspace = () => {
    if (validateInput() != true) setError(validateInput());
    else {
      isInternetConnected()
        .then(() => {
          setLoading(true);

          let PARAMS = {
            workspace_name: workspace,
            workspace_image: '',
          };
          console.log('PARAMS', PARAMS);
          createWorkspace(PARAMS)
            .then(res => {
              const {status, workspace_id: id, workspace_name: name} = res;
              console.log({id, name});
              if (status)
                dispatch(setWorkspaceData({id, name})).then(() => {
                  setLoading(false);
                  navigation.navigate('AddMembers', {
                    workspace: {id, name},
                  });
                });
            })
            .catch(err => {
              setLoading(false);

              Toast.show({
                title: err.response.data.message,
              });
            });
        })
        .catch(err => {
          Toast.show({
            title: 'Please connect to the internet',
          });
        });
    }
  };

  return (
    <>
      <OutlineContainer>
        <KeyboardAvoidingView style={styles.inputView} behavior={'padding'}>
          <Text style={styles.heading}>Welcome</Text>
          <Text style={styles.subHeading}>Add your workspace</Text>
          <TextField
            placeholder="Enter Your Workspace"
            placeholderTextColor={themeStyleSheet.lightgray}
            label={'Workspace'}
            onChange={onChange}
            error={error}
            textContentType={'name'}
          />

          <Buttons
            type="primary"
            title={'ADD WORKSPACE'}
            onPress={addWorkspace}
            loading={loading}
          />
        </KeyboardAvoidingView>
      </OutlineContainer>
    </>
  );
};

export default AddWorkspace;
