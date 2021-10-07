import React, { useEffect } from 'react'
import { SafeAreaView, Text, StyleSheet, ActivityIndicator } from 'react-native'
import { INavigation } from '../app/interface'
import { AppStyles } from '../app/style'

export const LoadingScreen = ({ navigation }: INavigation) => {

    useEffect(()=>{
        setTimeout(()=>{
            navigation.navigate('Login')
        },2000)
    },[])

    return (
        <SafeAreaView style={styles.container}>
            <ActivityIndicator size={'large'} color={'#0000ff'}/>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: AppStyles.color.white,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})