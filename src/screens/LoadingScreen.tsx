import React from 'react';
import { Text, View, StyleSheet,  Button, TextInput } from 'react-native'
import { AppStyles } from '../../AppStyles';

export const LoadingScreen = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Sign In</Text>
            <View style={styles.InputContainer}>
                <TextInput
                    style={styles.body}
                    placeholder="E-mail or phone number"
                    onChangeText={text => {}}
                    value={''}
                    placeholderTextColor={AppStyles.color.grey}
                    underlineColorAndroid="transparent"
                />
            </View>
            <View style={styles.InputContainer}>
                <TextInput
                    style={styles.body}
                    secureTextEntry={true}
                    placeholder="Password"
                    onChangeText={text =>{}}
                    value={''}
                    placeholderTextColor={AppStyles.color.grey}
                    underlineColorAndroid="transparent"
                />
            </View>
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
      fontWeight: "bold",
      color: AppStyles.color.tint,
      alignItems: 'center'
    },
    content: {
      paddingLeft: 50,
      paddingRight: 50,
      textAlign: "center",
      fontSize: AppStyles.fontSize.content,
      color: AppStyles.color.text
    },
    loginContainer: {
      width: AppStyles.buttonWidth.main,
      backgroundColor: AppStyles.color.tint,
      borderRadius: AppStyles.borderRadius.main,
      padding: 10
    },
    loginText: {
      color: AppStyles.color.white
    },
    placeholder: {
      color: "red"
    },
    InputContainer: {
      width: AppStyles.textInputWidth.main,
      marginTop: 30,
      borderWidth: 1,
      borderStyle: "solid",
      borderColor: AppStyles.color.grey,
      borderRadius: AppStyles.borderRadius.main
    },
    body: {
      height: 40,
      paddingLeft: 20,
      paddingRight: 20,
      color: AppStyles.color.text
    }
});