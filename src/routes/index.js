import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Template from '../components/containers/Template';
import GettingStarted from '../components/containers/GettingStarted';

const Stack = createNativeStackNavigator();

const rootRoutes = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name="GettingStarted" component={GettingStarted} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default rootRoutes;