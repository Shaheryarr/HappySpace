import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  Text,
  View,
  Dimensions,
  KeyboardAvoidingView,
  Platform,
  Keyboard,
} from 'react-native';
import Modal from 'react-native-modal';
import {
  EMAIL_PATTERN,
  isInternetConnected,
  themeStyleSheet,
} from '../../../constants';
import {postLoginRequest, requestPassword} from '../../../SyncServices';
import Buttons from '../../common/Buttons';
import TextField from '../../common/TextField';
import styles from './styles';
import {useToast} from 'native-base';
import {useDispatch} from 'react-redux';
import {setUser} from '../../../redux/actions';

const {width, height} = Dimensions.get('screen');

const Login = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [modal, setModal] = useState(false);

  const Toast = useToast();

  const dispatch = useDispatch();

  const onChange = (text, type) => {
    setErrors({
      ...errors,
      [type]: '',
    });
    if (type == 'email') {
      setEmail(text);
    } else if (type == 'password') {
      setPassword(text);
    }
  };

  const forgotModal = () => {
    setModal(!modal);
  };

  const navigateToRegister = () => {
    navigation.navigate('Signup');
  };

  const validateInput = (onlyEmail = false) => {
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
    if (onlyEmail == true) {
      if (isValid == true) return isValid;
      else return obj.email;
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

    if (isValid == true) return isValid;
    else return obj;
  };

  const onLogin = () => {
    Keyboard.dismiss();

    if (validateInput() != true) setErrors(validateInput());
    else {
      isInternetConnected()
        .then(() => {
          let params = {
            email,
            password,
          };

          setLoading(true);

          postLoginRequest(params)
            .then(res => {
              const {isActive, user_workspaces, designation, name} = res;

              if (isActive) {
                let userDetails = {
                  name,
                  email,
                  designation,
                };

                dispatch(setUser(userDetails)).then(() => {
                  setLoading(false);
                  if (user_workspaces.length === 0) {
                    navigation.navigate('AddWorkspace');
                  } else {
                    navigation.navigate('SelectWorkspace', {
                      workspaces: user_workspaces,
                    });
                  }
                });
              } else {
                Toast.show({
                  title:
                    'We have sent a one time password to your email. Please verify',
                  duration: 5000,
                });

                navigation.navigate('OtpVerification', {
                  email,
                  fromLogin: true,
                });
              }
            })
            .catch(err => {
              setLoading(false);

              Toast.show({
                title: 'Invalid Credentials',
              });
              return;
            });
        })
        .catch(err => {
          Toast.show({
            title: 'Please connect to the internet',
          });
        });
    }
  };

  const onResetPassword = () => {
    if (validateInput(true) != true) setErrors({email2: validateInput(true)});
    else {
      const PARAMS = {
        email,
      };
      requestPassword(PARAMS)
        .then(res => {
          alert('We have sent you a link on your email!');
        })
        .catch(err => {
          Toast.show({
            title: 'Something went wrong',
          });
        });
    }
  };

  return (
    <>
      <SafeAreaView style={styles.notchContainer} />
      <SafeAreaView style={styles.container}>
        <View style={styles.upperView}>
          <KeyboardAvoidingView
            style={styles.inputView}
            behavior={Platform.OS == 'ios' ? 'padding' : undefined}>
            <Text style={styles.heading}>Welcome Back</Text>
            <Text style={styles.subHeading}>Log in to your HappySpace</Text>
            <TextField
              placeholder="Enter Email Address"
              placeholderTextColor={themeStyleSheet.lightgray}
              label={'Email Address'}
              onChange={text => onChange(text, 'email')}
              error={errors.email}
              textContentType={'emailAddress'}
            />
            <TextField
              placeholder="********"
              placeholderTextColor={themeStyleSheet.lightgray}
              label={'Password'}
              secureTextEntry={true}
              onChange={text => onChange(text, 'password')}
              error={errors.password}
              textContentType={'password'}
            />
            <Text onPress={forgotModal} style={styles.forgotText}>
              Forgot Password?
            </Text>
            <Buttons
              type="primary"
              title={'LOG IN'}
              loading={loading}
              onPress={onLogin}
            />
          </KeyboardAvoidingView>
        </View>
        <View style={styles.lowerView}>
          <Text style={{color: themeStyleSheet.white}}>
            Not Registered Yet?{' '}
          </Text>
          <Text onPress={navigateToRegister} style={styles.registerText}>
            Register Now
          </Text>
        </View>
      </SafeAreaView>
      <Modal
        isVisible={modal}
        avoidKeyboard={true}
        style={{margin: 0}}
        onBackdropPress={forgotModal}
        onBackButtonPress={forgotModal}>
        <View style={styles.modalContainer}>
          <TextField
            autoFocus={true}
            placeholder="Enter Email Address"
            placeholderTextColor={themeStyleSheet.lightgray}
            label={'Email Address'}
            onChange={text => onChange(text, 'email')}
            error={errors.email2}
            textContentType={'emailAddress'}
          />
          <Buttons onPress={onResetPassword} title="RESET PASSWORD" />
        </View>
      </Modal>
    </>
  );
};

export default Login;
