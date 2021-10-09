import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AddEditTask, TaskList } from '..';

export const Task = () => {
    const Stack = createNativeStackNavigator()
    return (
        <Stack.Navigator initialRouteName={'TaskList'}>
            <Stack.Screen name={'TaskList'} component={TaskList} options={{headerShown: false}} />
            <Stack.Screen name={'AddEditTask'} component={AddEditTask} options={{headerShown: false}} />
        </Stack.Navigator>
    )
}
