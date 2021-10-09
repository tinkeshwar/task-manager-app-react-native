import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { LoginScreen } from './LoginScreen';
import { RegisterScreen } from './RegisterScreen';
import { DashboardScreen } from './DashboardScreen';
import UserContext from '../app/context';
import Toast from 'react-native-toast-message';

export const HomeScreen = () => {
    const Stack = createNativeStackNavigator();
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
                    <Toast ref={(ref) => Toast.setRef(ref)} />
                </NavigationContainer>
            )}
        </UserContext.Consumer>
        
    )
}