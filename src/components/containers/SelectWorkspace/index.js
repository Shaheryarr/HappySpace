import React, { useState } from 'react';
import {
  SafeAreaView,
  Text,
  View,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import { useDispatch } from 'react-redux';
import { setWorkspaceData } from '../../../redux/actions';
import Buttons from '../../common/Buttons';
import styles from './styles';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { themeStyleSheet } from '../../../constants';

const SelectWorkspace = ({ route, navigation }) => {
  const { params } = route;

  const [workspaces, setWorkspaces] = useState(params.workspaces || []);
  const [selectedWorkspace, setSelectedWorkSpace] = useState(false);

  const dispatch = useDispatch();

  const handleContactUs = () => {
    //Contact Us
  };

  const handleSelectWorkspace = item => {
    setSelectedWorkSpace(item);
  };

  const handleContinue = () => {
    dispatch(setWorkspaceData(selectedWorkspace)).then(() => {
      navigation.reset({
        index: 0,
        routes: [{ name: 'appRoutes' }],
      });
    });
  };

  const renderItem = ({ item, index }) => {
    const exists = item.workspace_id == selectedWorkspace.workspace_id;
    return (
      <TouchableOpacity
        style={
          exists ? styles.listItemContainerSelected : styles.listItemContainer
        }
        onPress={() => handleSelectWorkspace(item)}>
        <View style={styles.listItemInitialContainer}>
          <View
            style={
              exists ? styles.listItemInitialSelected : styles.listItemInitial
            }>
            <Text style={styles.listMainText}>
              {item.workspace_name.substring(0, 1).toUpperCase()}
            </Text>
          </View>
        </View>

        <View style={styles.listItemMainContainer}>
          <Text>{item.workspace_name}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  const footer = () => (
    <TouchableOpacity
      style={styles.listItemContainer}
      onPress={() => navigation.navigate('AddWorkspace')}>
      <View style={styles.listItemInitialContainer}>
        <View style={styles.listItemInitial}>
          <Icon name="plus" size={40} color={themeStyleSheet.white} />
        </View>
      </View>

      <View style={styles.listItemMainContainer}>
        <Text>{'Add Workspace'}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <>
      <SafeAreaView style={styles.notchContainer} />
      <SafeAreaView style={styles.mainContainer}>
        <View style={styles.topContainer}>
          <View style={styles.secondaryContainer}>
            <Text style={styles.otpHeading}>Select a Workspace</Text>
            <Text>Please select a workspace you want to join</Text>
          </View>

          <FlatList
            data={workspaces}
            keyExtractor={(item, index) => item.workspace_id}
            renderItem={renderItem}
            ListFooterComponent={footer}
          />

          <View style={styles.buttonContainer}>
            <Buttons
              type="primary"
              title={'Continue'}
              onPress={handleContinue}
              disabled={!selectedWorkspace}
            />
          </View>
        </View>

        <View style={styles.bottomContainer}>
          <TouchableOpacity onPress={handleContactUs}>
            <Text style={styles.subText}>
              Having trouble? <Text style={styles.mainText}>Contact Us!</Text>
            </Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </>
  );
};

export default SelectWorkspace;