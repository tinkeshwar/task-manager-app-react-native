import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { LoginScreen } from './LoginScreen';
import { RegisterScreen } from './RegisterScreen';
import { DashboardScreen } from './DashboardScreen';
import UserContext from '../app/context';

const Stack = createNativeStackNavigator();
export const HomeScreen = () => {
    return (
        <UserContext.Consumer>
            {(user)=>(
                <NavigationContainer>
                <Stack.Navigator initialRouteName={'Login'}>
                    {user ? (
                        <Stack.Screen name={'Dashboard'} component={DashboardScreen} options={{headerShown: false}} />
                    ):(
                        <>
                            <Stack.Screen name={'Login'} component={LoginScreen} options={{headerShown: false}} />
                            <Stack.Screen name={'Register'} component={RegisterScreen} options={{headerShown: false}} />
                        </>
                        
                    )}
                </Stack.Navigator>
            </NavigationContainer>
            )}
        </UserContext.Consumer>
        
    )
}