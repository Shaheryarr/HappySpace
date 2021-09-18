import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  Text,
  View,
  Dimensions,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import {EMAIL_PATTERN, themeStyleSheet} from '../../../constants';
import Buttons from '../../common/Buttons';
import OutlineContainer from '../../common/OutlineContainer';
import TextField from '../../common/TextField';
import styles from './styles';

const {width, height} = Dimensions.get('screen');

const AddWorkspace = ({navigation, dispatch}) => {
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
      alert('all good');
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
          />
        </KeyboardAvoidingView>
      </OutlineContainer>
    </>
  );
};

export default AddWorkspace;
