import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from '../components/containers/SplashScreen';


const Stack = createNativeStackNavigator();

const rootRoutes = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName={'SplashScreen'}>
                <Stack.Screen name="SplashScreen" component={SplashScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default rootRoutes;