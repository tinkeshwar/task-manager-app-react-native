import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { TaskList } from './task';
import { AddTask } from './addTask';
import { EditTask } from './editTask';
import { ShowTask } from './show';

export const Task = () => {
    const Stack = createNativeStackNavigator()
    return (
        <Stack.Navigator initialRouteName={'TaskList'}>
            <Stack.Screen name={'TaskList'} component={TaskList} options={{headerShown: false}} />
            <Stack.Screen name={'AddTask'} component={AddTask} options={{headerShown: false}} />
            <Stack.Screen name={'EditTask'} component={EditTask} options={{headerShown: false}} />
            <Stack.Screen name={'ShowTask'} component={ShowTask} options={{headerShown: false}} />
        </Stack.Navigator>
    )
}
