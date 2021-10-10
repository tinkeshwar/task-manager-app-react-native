import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { HomeScreen } from './src/screens/HomeScreen';
import AppLoading from 'expo-app-loading';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { UserProvider } from './src/app/context';
import { loadUserProfile, selectAuthProfile } from './src/features/auth/store';
import { UserProfileResponseType } from './src/features/auth/type';

export default function Root() {
  const dispatch = useDispatch()
  const user: UserProfileResponseType = useSelector(selectAuthProfile)
  const [appReady, setAppReady] = useState<boolean>(false)

  const checkAuth = async () => {
    const token = await AsyncStorage.getItem('token')
    if(token){
      dispatch(loadUserProfile())
    }
  }

  if(!appReady && !Object.keys(user).length){
    return (
      <AppLoading
        startAsync={checkAuth}
        onFinish={()=>setAppReady(true)}
        onError={()=>console.warn}
      />
    )
  }
  return (
    <UserProvider value={user}>
        <HomeScreen/>
    </UserProvider>
  );
}
