import React from 'react';
import { INavigation } from '../app/interface';
import { Login } from '../features/auth/';

export const LoginScreen = ({navigation}: INavigation) => {
    return (
        <Login navigation={navigation}/>
    )
}