import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Login from '../components/containers/Login';
import SplashScreen from '../components/containers/SplashScreen';
import GettingStarted from '../components/containers/GettingStarted';
import OnboardEmployee from '../components/containers/OnboardEmployee';
import AddWorkspace from '../components/containers/AddWorkspace';
import AddMembers from '../components/containers/AddMembers';
import Signup from '../components/containers/SignUp';
import OtpVerification from '../components/containers/OtpVerification';

const Stack = createNativeStackNavigator();

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
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default rootRoutes;
