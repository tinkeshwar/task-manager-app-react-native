import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { LoadingScreen } from './LoadingScreen';

const Stack = createNativeStackNavigator();
export const HomeScreen = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name={'Loading'} component={LoadingScreen} options={{headerShown: false}} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}