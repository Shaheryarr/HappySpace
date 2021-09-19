import {Avatar} from 'native-base';
import React, {useEffect, useState} from 'react';
import {SafeAreaView, Text, View, FlatList} from 'react-native';
import {themeStyleSheet} from '../../../constants';
import CustomHeader from '../../common/CustomHeader';
import styles from './styles';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {getQuizLeaderBoard} from '../../../SyncServices';

const LeaderBoard = ({navigation}) => {
  const [data, setData] = useState([]);
  const handleBackAction = () => {
    navigation.goBack();
  };

  const getData = () => {
    getQuizLeaderBoard()
      .then(res => {
        console.log(
          'res0',
          res.message?.map(val => Object.values(val)[0]),
        );
        setData(res.message?.map(val => Object.values(val)[0]));
      })
      .catch(err => {});
  };

  useEffect(() => {
    getData();
    return () => {};
  }, []);

  const renderItem = ({item, index}) => (
    <View
      style={{
        width: '95%',
        height: 70,
        alignSelf: 'center',
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: themeStyleSheet.white,
        borderRadius: 10,
        paddingHorizontal: 20,
      }}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-around',
          flex: 5,
        }}>
        <Text style={{fontSize: 30, color: themeStyleSheet.darkGray}}>
          {index + 1}
        </Text>
        <Avatar source={{uri: item?.image_url}}>
          {item?.name?.substring(0, 1).toUpperCase()}
        </Avatar>
        <Text style={{fontSize: 25, color: themeStyleSheet.darkGray}}>
          {item?.name}
        </Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          flex: 3,
          justifyContent: 'flex-end',
        }}>
        <Icon name="star" size={20} color="orange" />
        <Text style={{fontSize: 20, color: themeStyleSheet.darkGray}}>
          {item?.success_percentage}points
        </Text>
      </View>
    </View>
  );
  return (
    <>
      <SafeAreaView style={styles.notchContainer} />
      <SafeAreaView style={styles.mainContainer}>
        <CustomHeader
          firstIcon={'chevron-left'}
          onPressFirstIcon={handleBackAction}
          save={false}
          //   onPressThirdIcon={handleSave}
          title={'Leaderboard'}
        />
        <View
          style={{
            width: '100%',
            height: 180,
            zIndex: 2,
            backgroundColor: themeStyleSheet.mainColor,
            alignSelf: 'center',
            flexDirection: 'row',
            justifyContent: 'space-evenly',
            alignItems: 'flex-end',
            paddingHorizontal: 40,
          }}>
          <Avatar size="lg" source={{uri: 'ssss'}}>
            <Text
              style={{
                fontSize: 25,
                fontWeight: 'bold',
                color: themeStyleSheet.white,
              }}>
              II
            </Text>
          </Avatar>
          <Avatar
            size="xl"
            source={{uri: 's'}}
            style={{transform: [{translateY: -30}]}}>
            <Text
              style={{
                fontSize: 30,
                fontWeight: 'bold',
                color: themeStyleSheet.white,
              }}>
              II
            </Text>
          </Avatar>
          <Avatar size="lg" source={{uri: 's'}}>
            <Text
              style={{
                fontSize: 25,
                fontWeight: 'bold',
                color: themeStyleSheet.white,
              }}>
              II
            </Text>
          </Avatar>
        </View>
        <View
          style={{
            position: 'absolute',
            transform: [{scaleX: 2.5}, {translateY: 110}],
            height: 200,
            width: 200,
            borderRadius: 100,
            backgroundColor: themeStyleSheet.mainColor,
            alignSelf: 'center',
          }}
        />
        <FlatList
          data={data}
          keyExtractor={item => item.name}
          renderItem={renderItem}
          style={{width: '100%', marginTop: 80}}
          showsVerticalScrollIndicator={false}
          ItemSeparatorComponent={() => <View style={{height: 15}} />}
        />
      </SafeAreaView>
    </>
  );
};

export default LeaderBoard;
