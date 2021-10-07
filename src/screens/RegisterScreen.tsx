import React from 'react';
import { INavigation } from '../app/interface';
import { Register } from '../features/auth';

export const RegisterScreen = ({navigation}: INavigation) => {
    return (
        <Register navigation={navigation} />
    )
}