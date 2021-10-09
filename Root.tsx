import React, { useState } from 'react';
import { Provider, useDispatch, useSelector } from 'react-redux';
import { store } from './src/app/store';
import { HomeScreen } from './src/screens/HomeScreen';
import Toast from 'react-native-toast-message';
import AppLoading from 'expo-app-loading';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { UserProvider } from './src/app/context';
import { loadUserProfile, selectAuthUser } from './src/features/auth/store';

export default function Root() {
  const dispatch = useDispatch()
  const user = useSelector(selectAuthUser)
  const [appReady, setAppReady] = useState<boolean>(false)

  const checkAuth = async () => {
    const token = await AsyncStorage.getItem('token')
    if(token){
      dispatch(loadUserProfile())
    }
  }

  if(!appReady){
    return (
      <AppLoading
        startAsync={checkAuth}
        onFinish={()=>setAppReady(true)}
        onError={()=>{}}
      />
    )
  }
  return (
    <UserProvider value={user}>
        <HomeScreen/>
        <Toast config={{}} ref={(ref) => Toast.setRef(ref)} />
    </UserProvider>
  );
}