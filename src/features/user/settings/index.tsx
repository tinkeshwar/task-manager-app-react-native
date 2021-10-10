import AsyncStorage from '@react-native-async-storage/async-storage'
import React from 'react'
import { SafeAreaView, Text, TouchableOpacity, StyleSheet, View } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { INavigation } from '../../../app/interface'
import { selectAuthProfile, setProfile } from '../../auth/store'
import { UserProfileResponseType } from '../../auth/type'


export const Settings = ({navigation}:INavigation) => {

    const dispatch = useDispatch()
    const user: UserProfileResponseType = useSelector(selectAuthProfile)

    const handleLogout = async () => {
        await AsyncStorage.clear()
        dispatch(setProfile({} as UserProfileResponseType))
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={{padding:10}}><Text style={{fontSize:22}}>Hi, {user?.user?.firstname||''}</Text></View>
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