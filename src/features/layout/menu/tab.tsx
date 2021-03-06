import React, { useContext } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { UserDashboard } from '../../dashboard';
import { Settings } from '../../user';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { AppStyles } from '../../auth/styled';
import { INavigation } from '../../../app/interface';
import UserContext from '../../../app/context';
import { UserProfileResponseType } from '../../auth/type';
import { Bucket } from '../../task/bucket';
import { Task } from '../../task/task';

const Tab = createBottomTabNavigator()

export const TabMenu = ({navigation}:INavigation) => {
    const user = useContext(UserContext) as UserProfileResponseType
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
                component={Bucket} 
                options={{
                    title: 'Buckets',
                    tabBarLabelPosition: 'below-icon',
                    headerStyle: {
                        backgroundColor: AppStyles.color.tint,
                    },
                    headerTintColor: AppStyles.color.white,
                    tabBarActiveTintColor: 'green',
                    tabBarInactiveTintColor: 'gray', 
                    tabBarBadge: user.buckets,
                    tabBarIcon:()=><FontAwesome5 
                        name={'bitbucket'} size={30} color={'green'}
                    />
                }}
            />
            <Tab.Screen 
                name="Tasks" 
                component={Task} 
                options={{
                    title: 'Tasks', 
                    tabBarLabelPosition: 'below-icon',
                    headerStyle: {
                        backgroundColor: AppStyles.color.tint,
                    },
                    headerTintColor: AppStyles.color.white,
                    tabBarActiveTintColor: 'blue',
                    tabBarInactiveTintColor: 'gray',
                    tabBarBadge: user.tasks,
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
                    tabBarLabelPosition: 'below-icon', 
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