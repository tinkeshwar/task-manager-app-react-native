import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { UserDashboard } from '../../dashboard';
import { BucketList, TaskList } from '../../task';
import { Settings } from '../../user';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { AppStyles } from '../../auth/styled';
import { INavigation } from '../../../app/interface';

export const TabMenu = ({navigation}:INavigation) => {
    const Tab = createBottomTabNavigator();
    return (
        <Tab.Navigator>
            <Tab.Screen 
                name="UserDashboard" 
                component={UserDashboard} 
                options={{
                    title: 'Dashboard', 
                    tabBarLabelPosition: 'below-icon',
                    headerStyle: {
                        backgroundColor: AppStyles.color.tint,
                    },
                    headerTintColor: AppStyles.color.white,
                    tabBarActiveTintColor: 'tomato',
                    tabBarInactiveTintColor: 'gray',
                    tabBarIcon:()=><FontAwesome5 
                        name={'home'} size={30} color={'red'}
                    />
                }}
            />
            <Tab.Screen 
                name="Task Buckets" 
                component={BucketList} 
                options={{
                    title: 'Buckets',
                    headerStyle: {
                        backgroundColor: AppStyles.color.tint,
                    },
                    headerTintColor: AppStyles.color.white,
                    tabBarActiveTintColor: 'green',
                    tabBarInactiveTintColor: 'gray', 
                    tabBarIcon:()=><FontAwesome5 
                        name={'bitbucket'} size={30} color={'green'}
                    />
                }}
            />
            <Tab.Screen 
                name="Tasks" 
                component={TaskList} 
                options={{
                    title: 'Tasks', 
                    headerStyle: {
                        backgroundColor: AppStyles.color.tint,
                    },
                    headerTintColor: AppStyles.color.white,
                    tabBarActiveTintColor: 'blue',
                    tabBarInactiveTintColor: 'gray',
                    tabBarIcon:()=><FontAwesome5 
                        name={'tasks'} size={30} color={'blue'}
                    />
                }}
            />
            <Tab.Screen
                name="Settings" 
                component={Settings} 
                options={{
                    title: 'Settings', 
                    headerStyle: {
                        backgroundColor: AppStyles.color.tint,
                    },
                    headerTintColor: AppStyles.color.white,
                    tabBarActiveTintColor: 'red',
                    tabBarInactiveTintColor: 'gray',
                    tabBarIcon:()=><FontAwesome5 
                        name={'cog'} size={30} color={'red'}
                    />
                }}
            />
        </Tab.Navigator>
    )
}