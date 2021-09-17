import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from '../components/containers/SplashScreen';
import Login from '../components/containers/Login';


const Stack = createNativeStackNavigator();

const rootRoutes = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName={'SplashScreen'} screenOptions={{ headerShown: false }}>
                <Stack.Screen name="SplashScreen" component={SplashScreen} />
                <Stack.Screen name="Login" component={Login} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default rootRoutes;