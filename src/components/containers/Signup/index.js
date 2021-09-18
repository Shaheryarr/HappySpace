import { useToast } from 'native-base';
import React, { useEffect, useState } from 'react';
import {
  SafeAreaView,
  Text,
  View,
  Dimensions,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { EMAIL_PATTERN, isInternetConnected, themeStyleSheet } from '../../../constants';
import { postSignUpRequest } from '../../../SyncServices';
import Buttons from '../../common/Buttons';
import OutlineContainer from '../../common/OutlineContainer';
import TextField from '../../common/TextField';
import styles from './styles';

const { width, height } = Dimensions.get('screen');

const Signup = ({ navigation, dispatch }) => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
    c_password: '',
    designation: '',
  });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const { name, email, password, c_password, designation } = form;

  const Toast = useToast();

  const onChange = (text, type) => {
    setErrors({
      ...errors,
      [type]: '',
    });
    setForm({ ...form, [type]: text });
  };

  const navigateToLogin = () => {
    navigation.navigate('Login');
  };

  const validateInput = () => {
    let isValid = true;
    let obj = {};
    if (email) {
      if (!EMAIL_PATTERN.test(email)) {
        isValid = false;
        obj = {
          email: 'Email address is not in the correct format',
        };
      }
    } else {
      isValid = false;
      obj = {
        email: 'Email address is required',
      };
    }
    if (password) {
      if (password.length < 8) {
        isValid = false;
        obj = {
          ...obj,
          password: 'Password must be more than 8 characters',
        };
      }
    } else {
      isValid = false;
      obj = {
        ...obj,
        password: 'Password is required',
      };
    }

    if (password.length >= 8 && c_password !== password) {
      isValid = false;
      obj = {
        ...obj,
        c_password: 'Password must match',
      };
    }

    if (!designation) {
      isValid = false;
      obj = {
        ...obj,
        designation: 'Designation is required',
      };
    }
    if (!name) {
      isValid = false;
      obj = {
        ...obj,
        name: 'Name is required',
      };
    }

    if (isValid == true) return isValid;
    else return obj;
  };

  const onSignup = () => {
    if (validateInput() != true) setErrors(validateInput());
    else {
      isInternetConnected().then(() => {
        let params = {
          name,
          email,
          password,
          designation,
        }

        setLoading(true)

        postSignUpRequest(params).then(res => {
          setLoading(false);

          Toast.show({
            title: 'We have sent a one time password to your email. Please verify',
            duration: 5000
          })

          navigation.navigate('OtpVerification', {
            email,
          });
        }).catch(err => {
          setLoading(false);

          Toast.show({
            title: err.response.data.message
          })
        })
      }).catch(err => {
        Toast.show({
          title: 'Please connect to the internet'
        })
      })
    }
  };

  return (
    <>
      <OutlineContainer
        lowerView={
          <>
            <Text style={{ color: themeStyleSheet.white }}>
              Already have an account?{' '}
            </Text>
            <Text onPress={navigateToLogin} style={styles.loginText}>
              Login
            </Text>
          </>
        }>
        <KeyboardAvoidingView style={styles.inputView} behavior={'padding'}>
          <Text style={styles.heading}>Welcome To HappySpace</Text>
          <Text style={styles.subHeading}>Join a workspace to stay happy</Text>
          <TextField
            placeholder="Enter Name"
            placeholderTextColor={themeStyleSheet.lightgray}
            label={'Full Name'}
            onChange={text => onChange(text, 'name')}
            error={errors.name}
            textContentType={'name'}
          />
          <TextField
            placeholder="Enter Email Address"
            placeholderTextColor={themeStyleSheet.lightgray}
            label={'Email Address'}
            onChange={text => onChange(text, 'email')}
            error={errors.email}
            textContentType={'emailAddress'}
            keyboardType="email-address"
          />
          <TextField
            placeholder="********"
            placeholderTextColor={themeStyleSheet.lightgray}
            label={'Password'}
            secureTextEntry={true}
            onChange={text => onChange(text, 'password')}
            error={errors.password}
            textContentType={'password'}
          // returnKeyType={'go'}
          />
          <TextField
            placeholder="********"
            placeholderTextColor={themeStyleSheet.lightgray}
            label={'Confirm Password'}
            secureTextEntry={true}
            onChange={text => onChange(text, 'c_password')}
            error={errors.c_password}
            textContentType={'password'}
          // returnKeyType={'go'}
          />
          <TextField
            placeholder="Enter Designation"
            placeholderTextColor={themeStyleSheet.lightgray}
            label={'Designation'}
            onChange={text => onChange(text, 'designation')}
            error={errors.designation}
            textContentType={'none'}
          />
          <Buttons type="primary" title={'SIGN UP'} onPress={onSignup} loading={loading} />
        </KeyboardAvoidingView>
      </OutlineContainer>
    </>
  );
};

export default Signup;
