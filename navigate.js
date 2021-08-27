import React from 'react';
import Auth from './src/Auth';
import Notes from './src/Notes';
import Registration from './src/Registration';

import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createStackNavigator();

function Navigate() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Auth">
                <Stack.Screen
                    options={{headerShown: false}}
                    name='Auth'
                    component={Auth} />
                <Stack.Screen
                    options={{headerShown: false}}
                    name='Notes'
                    component={Notes} />
                <Stack.Screen
                    options={{headerShown: false}}
                    name='Registration'
                    component={Registration} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default Navigate;