import React from 'react';
import {Dimensions, Platform} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {themeStyleSheet} from '../constants';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import Login from '../components/containers/Login';
import SplashScreen from '../components/containers/SplashScreen';
import GettingStarted from '../components/containers/GettingStarted';
import OnboardEmployee from '../components/containers/OnboardEmployee';
import AddWorkspace from '../components/containers/AddWorkspace';
import AddMembers from '../components/containers/AddMembers';
import Signup from '../components/containers/Signup';
import OtpVerification from '../components/containers/OtpVerification';
import SelectWorkspace from '../components/containers/SelectWorkspace';
import NewsFeed from '../components/containers/NewsFeed';
import Profile from '../components/containers/Profile';
import Menu from '../components/containers/Menu';
import CreatePost from '../components/containers/CreatePost';
import QuizDashboard from '../components/containers/QuizDashboard';
import QuizChooseUser from '../components/containers/QuizChooseUser';
import QuizMain from '../components/containers/QuizMain';
import PostDetail from '../components/containers/PostDetail';
import LeaderBoard from '../components/containers/LeaderBoard';
import QuizSetQuestions from '../components/containers/QuizSetQuestions';

const {height, width} = Dimensions.get('window');

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const screenOptions = (route, color) => {
  let iconName;

  switch (route.name) {
    case 'NewsFeed':
      iconName = 'newspaper-variant-outline';
      break;

    case 'Menu':
      iconName = 'apps';
      break;

    case 'Profile':
      iconName = 'face-profile';
      break;

    default:
      break;
  }

  return <Icon name={iconName} color={color} size={30} />;
};

const Tabs = () => {
  return (
    <Tab.Navigator
      initialRouteName={'NewsFeed'}
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarIcon: ({color}) => screenOptions(route, color),
        tabBarActiveTintColor: themeStyleSheet.mainColor,
        tabBarShowLabel: false,
        tabBarStyle:
          Platform.OS == 'ios'
            ? {height: height * 0.1}
            : {height: height * 0.08},
      })}>
      <Tab.Screen name="NewsFeed" component={NewsFeed} />
      <Tab.Screen name="Menu" component={Menu} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
};

const appRoutes = () => {
  return (
    <Stack.Navigator
      initialRouteName={'SplashScreen'}
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="Tabs" component={Tabs} />
      <Stack.Screen name="CreatePost" component={CreatePost} />
      <Stack.Screen name="QuizDashboard" component={QuizDashboard} />
      <Stack.Screen name="QuizChooseUser" component={QuizChooseUser} />
      <Stack.Screen name="QuizMain" component={QuizMain} />
      <Stack.Screen name="PostDetail" component={PostDetail} />
      <Stack.Screen name="QuizSetQuestions" component={QuizSetQuestions} />
    </Stack.Navigator>
  );
};

const rootRoutes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={'SplashScreen'}
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="SplashScreen" component={SplashScreen} />
        <Stack.Screen name="GettingStarted" component={GettingStarted} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="AddWorkspace" component={AddWorkspace} />
        <Stack.Screen name="AddMembers" component={AddMembers} />
        <Stack.Screen name="OnboardEmployee" component={OnboardEmployee} />
        <Stack.Screen name="OtpVerification" component={OtpVerification} />
        <Stack.Screen name="SelectWorkspace" component={SelectWorkspace} />
        <Stack.Screen name="LeaderBoard" component={LeaderBoard} />
        <Stack.Screen name="appRoutes" component={appRoutes} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default rootRoutes;
