import React from 'react';
import Auth from './src/Auth';
import Notes from './src/Notes';
import Registration from './src/Registration';
import ApiRequest from './src/ApiRequest'

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from '@react-navigation/native';

const Stack = createNativeStackNavigator()

const Navigate = () => {
    return (
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
                <Stack.Screen
                    option={{headerShown: false}}
                    name='ApiRequest'
                    component={ApiRequest} />
            </Stack.Navigator>
    );
}

export default Navigate;