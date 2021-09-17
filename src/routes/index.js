import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Login from '../components/containers/Login';
import SplashScreen from '../components/containers/SplashScreen';
import GettingStarted from '../components/containers/GettingStarted';
import Signup from '../components/containers/Signup';

const Stack = createNativeStackNavigator();

const rootRoutes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={'Signup'}
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="GettingStarted" component={GettingStarted} />
        <Stack.Screen name="SplashScreen" component={SplashScreen} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Signup" component={Signup} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default rootRoutes;
