import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Template from '../components/containers/Template';

const Stack = createNativeStackNavigator();

const rootRoutes = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={Template} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default rootRoutes;