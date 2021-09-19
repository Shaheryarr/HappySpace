import React, {useState} from 'react';
import {
  SafeAreaView,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import styles from './styles';
import Button from '../../common/Buttons';
import Carousel from 'react-native-snap-carousel';

const SLIDER_WIDTH = Dimensions.get('window').width;
const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 1);

const test = [
  {
    name: 'tes',
  },
  {
    name: 'ss',
  },
];

const GettingStarted = ({navigation}) => {
  const [data, setData] = useState([...test]);

  const handleSignUp = () => {
    navigation.navigate('Signup');
  };

  const handleLogin = () => {
    navigation.navigate('Login');
  };

  const renderItem = ({item, index}) => {
    return (
      <View style={styles.carouselItem}>
        <Text>Here</Text>
      </View>
    );
  };

  return (
    <>
      <SafeAreaView style={styles.notchContainer} />
      <SafeAreaView style={styles.mainContainer}>
        <View style={styles.topContainer}>
          <View style={styles.carouselContainer}>
            <Carousel
              data={data}
              renderItem={renderItem}
              sliderWidth={SLIDER_WIDTH}
              itemWidth={ITEM_WIDTH}
              inactiveSlideShift={0}
              enableSnap
            />
          </View>

          <View style={styles.buttonContainer}>
            <Button
              type="secondary"
              title={'Create Your Own Workspace'}
              onPress={handleSignUp}
            />
          </View>
        </View>

        <View style={styles.bottomContainer}>
          <TouchableOpacity onPress={handleLogin}>
            <Text style={styles.subText}>
              Already Registered? <Text style={styles.mainText}>Login</Text>
            </Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </>
  );
};

export default GettingStarted;
