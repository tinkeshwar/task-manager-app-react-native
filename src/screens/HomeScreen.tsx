import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { LoginScreen } from './LoginScreen';
import { LoadingScreen } from './LoadingScreen';
import { RegisterScreen } from './RegisterScreen';
import { DashboardScreen } from './DashboardScreen';

const Stack = createNativeStackNavigator();
export const HomeScreen = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName={'Loading'}>
                <Stack.Screen name={'Loading'} component={LoadingScreen} options={{headerShown: false}} />
                <Stack.Screen name={'Login'} component={LoginScreen} options={{headerShown: false}} />
                <Stack.Screen name={'Register'} component={RegisterScreen} options={{headerShown: false}} />
                <Stack.Screen name={'Dashboard'} component={DashboardScreen} options={{headerShown: false}} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}