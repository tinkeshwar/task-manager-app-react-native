import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AddEditBucket, BucketList } from '..';

export const Bucket = () => {
    const Stack = createNativeStackNavigator()
    return (
        <Stack.Navigator initialRouteName={'BucketList'}>
            <Stack.Screen name={'BucketList'} component={BucketList} options={{headerShown: false}} />
            <Stack.Screen name={'AddEditBucket'} component={AddEditBucket} options={{headerShown: false}} />
        </Stack.Navigator>
    )
}
