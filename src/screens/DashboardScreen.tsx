import React from 'react';
import { INavigation } from '../app/interface';
import { TabMenu } from '../features/layout';

export const DashboardScreen = ({navigation}:INavigation) => {
    return (
        <TabMenu navigation={navigation}/>
    )
}