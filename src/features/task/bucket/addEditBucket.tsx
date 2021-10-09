import React, { useState } from 'react'
import { ActivityIndicator, SafeAreaView, Text, TextInput, TouchableOpacity, View, StyleSheet } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { INavigation } from '../../../app/interface'
import { AppStyles } from '../../../app/style'
import { notifyError, notifySuccess } from '../../../helpers'
import { createBucket } from '../api'
import { loadBuckets, selectLoading, selectPage, setLoading } from '../store'
import { styles } from '../styled'

export const AddEditBucket = ({navigation}:INavigation) => {

    const dispatch = useDispatch()
    const loading: boolean = useSelector(selectLoading)
    const page: number = useSelector(selectPage)

    const [name, setName] = useState<string|undefined>()
    const [description, setDescription] = useState<string|undefined>()

    const handleSubmit = async () => {
        if(!name){
            notifyError('Empty', 'All field are required.')
        }
        dispatch(setLoading(true))
        const post ={
            name,
            description
        }
        const response = await createBucket(post)
        if(response.id){
            notifySuccess('Congratulations','Bucket added successfully.')
            dispatch(loadBuckets(page, 10))
            navigation.navigate('BucketList', {})
        }
        dispatch(setLoading(false))
    }

    return (
        <SafeAreaView style={styles.container}>
          <Text style={styles.inputTitle}>Add Bucket</Text>
          <View style={styles.InputContainer}>
            <TextInput
                style={styles.InputBody}
                placeholder='Name'
                onChangeText={text => setName(text)}
                value={name||''}
                placeholderTextColor={AppStyles.color.grey}
                underlineColorAndroid='transparent'
            />
          </View>
          <View style={styles.InputContainer}>
            <TextInput
                style={styles.InputTextAreaBody}
                placeholder='Description'
                onChangeText={text => setDescription(text)}
                value={description||''}
                placeholderTextColor={AppStyles.color.grey}
                underlineColorAndroid='transparent'
                multiline={true}
            />
          </View>
          {loading && <ActivityIndicator
            style={{ marginTop: 30 }}
            size={'large'}
            animating={loading}
            color={AppStyles.color.tint}
          />}
          {!loading &&<TouchableOpacity style={styles.submitButtonArea} onPress={handleSubmit}>
            <Text style={styles.submitButton}>Add Bucket</Text>
          </TouchableOpacity>}
        </SafeAreaView>
    )
}