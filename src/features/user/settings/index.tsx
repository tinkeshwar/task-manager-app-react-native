import React from 'react'
import { SafeAreaView, Text, TouchableOpacity, StyleSheet } from 'react-native'
import { INavigation } from '../../../app/interface'

export const Settings = ({navigation}:INavigation) => {
    const handleLogout =() => {
        navigation.navigate('Buckets')
    }

    return (
        <SafeAreaView style={styles.container}>
            <TouchableOpacity style={styles.logoutButtonArea} onPress={handleLogout}>
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