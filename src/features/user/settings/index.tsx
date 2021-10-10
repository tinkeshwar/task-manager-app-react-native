import AsyncStorage from '@react-native-async-storage/async-storage'
import React from 'react'
import { SafeAreaView, Text, TouchableOpacity, StyleSheet } from 'react-native'
import { useSelector } from 'react-redux'
import { INavigation } from '../../../app/interface'
import { selectAuthUser } from '../../auth/store'


export const Settings = ({navigation}:INavigation) => {

    const user = useSelector(selectAuthUser)
    const handleLogout = async () => {
        await AsyncStorage.clear()
        navigation.navigate('Login')
    }

    return (
        <SafeAreaView style={styles.container}>
            <TouchableOpacity style={styles.logoutButtonArea} onPress={()=>handleLogout()}>
                <Text style={styles.logoutButton}>Log Out</Text>
            </TouchableOpacity>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    logoutButtonArea: {
        backgroundColor: 'red',
        padding: 20,
        borderRadius: 5,
        shadowColor: 'grey'
    },
    logoutButton:{
        color: 'white',
        fontSize: 20
    }
})