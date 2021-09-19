import {FlatList} from 'native-base';
import React, {useCallback, useState} from 'react';
import {Text, View, KeyboardAvoidingView} from 'react-native';
import {
  EMAIL_PATTERN,
  isInternetConnected,
  themeStyleSheet,
} from '../../../constants';
import Buttons from '../../common/Buttons';
import OutlineContainer from '../../common/OutlineContainer';
import TextField from '../../common/TextField';
import styles from './styles';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {addMembers} from '../../../SyncServices';

const AddMembers = ({navigation, route, dispatch}) => {
  const [member, setMember] = useState('');
  const [members, setMembers] = useState([]);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const {
    params: {workspace},
  } = route;

  const onChange = text => {
    setError('');
    setMember(text);
  };

  const validateInput = () => {
    let isValid = true;
    let obj = '';
    if (member) {
      if (!EMAIL_PATTERN.test(member)) {
        isValid = false;
        obj = 'Email address is not in the correct format';
      }
    } else {
      isValid = false;
      obj = 'Email address is required';
    }

    if (isValid == true) return isValid;
    else return obj;
  };

  const onAdd = () => {
    if (validateInput() != true) setError(validateInput());
    else {
      // alert('all good');
      setMembers([...members, member]);
      setMember('');
    }
  };

  const onDelete = i => () => {
    members.splice(i, 1);
    setMembers([...members]);
  };

  const onFinish = () => {
    isInternetConnected()
      .then(() => {
        setLoading(true);

        let PARAMS = {
          workspace_id: workspace.id,
          emails: members,
        };
        console.log('PARAMS', PARAMS);
        addMembers(PARAMS)
          .then(res => {
            const {status} = res;
            if (status) navigation.navigate('appRoutes');
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
  };

  const renderItems = useCallback(
    ({item, index}) => (
      <View style={styles.listItem}>
        <Text style={styles.listItemText}>{item}</Text>
        <Icon
          onPress={onDelete(index)}
          size={21}
          name="close-circle"
          style={styles.icon}
        />
      </View>
    ),
    [members, onAdd],
  );

  return (
    <>
      <OutlineContainer>
        <KeyboardAvoidingView style={styles.inputView} behavior={'padding'}>
          <Text style={styles.heading}>Welcome To HappySpace</Text>
          <Text style={styles.subHeading}>
            Invite members to {workspace?.name}
          </Text>
          <View style={{alignItems: 'center'}}>
            <TextField
              placeholder="Enter Member Email"
              placeholderTextColor={themeStyleSheet.lightgray}
              label={'Member Email'}
              onChange={onChange}
              error={error}
              textContentType={'name'}
              keyboardType="email-address"
              value={member}
            />
            <Buttons type="secondary" title="Add" onPress={onAdd} />
          </View>
          <View style={styles.list}>
            <FlatList
              data={members}
              showsVerticalScrollIndicator={false}
              renderItem={renderItems}
            />
          </View>

          <Buttons
            type="primary"
            title={members.length === 0 ? 'SKIP' : 'INVITE'}
            onPress={
              members.length === 0
                ? () => navigation.navigate('appRoutes')
                : onFinish
            }
            loading={loading}
          />
        </KeyboardAvoidingView>
      </OutlineContainer>
    </>
  );
};

export default AddMembers;
