import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useState } from 'react';
import { Text, View, TextInput, TouchableOpacity, ActivityIndicator } from 'react-native'
import { useDispatch, useSelector } from 'react-redux';
import { INavigation } from '../../../app/interface';
import { notifyError } from '../../../helpers';
import { login } from '../api';
import { loadUserProfile, logUser, selectLoading, setLoading } from '../store';
import { AppStyles, styles } from '../styled';
import { AuthResponseType } from '../type';

export const Login = ({navigation}: INavigation) => {

  const dispatch = useDispatch()
  const loading: boolean = useSelector(selectLoading)
  const [email, setEmail] = useState<string|undefined>()
  const [password, setPassword] = useState<string|undefined>()

  const handleSubmit = async () => {
    if(!email || !password){
      notifyError('Empty', 'Please enter email and password.')
      return false
    } 
    dispatch(setLoading(true))
    const data = {
        email,
        password
    }
    const api: AuthResponseType = await login(data) as any
    if(api !==undefined && api?.user?.id){
        dispatch(logUser(api))
        await AsyncStorage.setItem('token', api.token)
        await AsyncStorage.setItem('refresh', api.refresh)
        dispatch(loadUserProfile())
    }
    dispatch(setLoading(false))
  }

  const registerHandle = () => {
    navigation.navigate('Register')
  }

  return (
      <View style={styles.container}>
          <Text style={styles.title}>Sign In</Text>
          <View style={styles.InputContainer}>
            <TextInput
                style={styles.body}
                placeholder='E-mail'
                onChangeText={text => setEmail(text)}
                value={email||''}
                placeholderTextColor={AppStyles.color.grey}
                underlineColorAndroid='transparent'
            />
          </View>
          <View style={styles.InputContainer}>
            <TextInput
                style={styles.body}
                secureTextEntry={true}
                placeholder='Password'
                onChangeText={text =>setPassword(text)}
                value={password ||''}
                placeholderTextColor={AppStyles.color.grey}
                underlineColorAndroid='transparent'
            />
          </View>
          {loading && <ActivityIndicator
            style={{ marginTop: 30 }}
            size={'large'}
            animating={loading}
            color={AppStyles.color.tint}
          />}
          {!loading && <TouchableOpacity style={styles.forgetLinkContainer} onPress={()=>notifyError('Waiting', 'Not Implemented')}>
            <Text>Forget password?</Text>
          </TouchableOpacity>}
          {!loading &&<TouchableOpacity style={styles.loginButtonContainer} onPress={handleSubmit}>
            <Text style={styles.loginButton}>Sign In</Text>
          </TouchableOpacity>}
          {!loading && <TouchableOpacity style={styles.forgetLinkContainer} onPress={registerHandle}>
            <Text>Don't have account? Sign Up Now</Text>
          </TouchableOpacity>}
    </View>
  )
}