import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import UserContext from '../app/context';
import { TabMenu } from '../features/layout';
import { Login, Register } from '../features/auth';
import Toast from 'react-native-toast-message';

const Stack = createNativeStackNavigator();

export const HomeScreen = () => {
    return (
        <UserContext.Consumer>
            {(user)=>(
                <NavigationContainer>
                    <Stack.Navigator initialRouteName={'Login'}>
                        {!user || user === undefined || Object.keys(user).length === 0 ? (
                            <>
                                <Stack.Screen name={'Login'} component={Login} options={{headerShown: false}} />
                                <Stack.Screen name={'Register'} component={Register} options={{headerShown: false}} />
                            </>
                        ) : (
                            <>
                                <Stack.Screen name={'Dashboard'} component={TabMenu} options={{headerShown: false}} />
                            </>
                        )}
                    </Stack.Navigator>
                    <Toast ref={(ref) => Toast.setRef(ref)} />
                </NavigationContainer>
            )}
        </UserContext.Consumer>
        
    )
}