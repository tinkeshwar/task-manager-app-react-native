import React, { useState } from 'react';
import { Text, View, StyleSheet, TextInput, TouchableOpacity, ActivityIndicator } from 'react-native'
import { useDispatch, useSelector } from 'react-redux';
import { AppStyles } from '../../../app/style';
import { logInUser, selectLoading } from '../store';

export const Login = () => {

  const dispatch = useDispatch()
  const loading: boolean = useSelector(selectLoading)
  const [email, setEmail] = useState<string|undefined>()
  const [password, setPassword] = useState<string|undefined>()

  const handleSubmit = async () => {
    dispatch(logInUser({email, password}))
  }

  return (
      <View style={styles.container}>
          <Text style={styles.title}>Sign In</Text>
          <View style={styles.InputContainer}>
            <TextInput
                style={styles.body}
                placeholder='E-mail or phone number'
                onChangeText={text => setEmail(text)}
                value={email}
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
                value={password}
                placeholderTextColor={AppStyles.color.grey}
                underlineColorAndroid='transparent'
            />
          </View>
          {loading && <ActivityIndicator
            style={{ marginTop: 30 }}
            size="large"
            animating={loading}
            color={AppStyles.color.tint}
          />}
          {!loading &&<TouchableOpacity style={styles.loginButtonContainer} onPress={handleSubmit}>
            <Text style={styles.loginButton}>Sign In</Text>
          </TouchableOpacity>}
    </View>
  )
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center'
    },
    title: {
      fontSize: AppStyles.fontSize.title,
      fontWeight: 'bold',
      color: AppStyles.color.tint,
      alignItems: 'center'
    },
    content: {
      paddingLeft: 50,
      paddingRight: 50,
      textAlign: 'center',
      fontSize: AppStyles.fontSize.content,
      color: AppStyles.color.text
    },
    loginButtonContainer: {
      width: '50%',
      backgroundColor: AppStyles.color.tint,
      borderRadius: AppStyles.borderRadius.main,
      padding: 10,
      marginTop: 30
    },
    InputContainer: {
      width: AppStyles.textInputWidth.main,
      marginTop: 30,
      borderWidth: 1,
      borderStyle: 'solid',
      borderColor: AppStyles.color.grey,
      borderRadius: AppStyles.borderRadius.main
    },
    body: {
      height: 40,
      paddingLeft: 20,
      paddingRight: 20,
      color: AppStyles.color.text
    },
    loginButton: {
      color: '#fff',
      textAlign: 'center',
      padding: 5,
      fontSize: 20
    }
});