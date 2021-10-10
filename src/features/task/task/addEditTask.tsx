import React, { useEffect, useState } from 'react'
import { ActivityIndicator, SafeAreaView, Text, TextInput, TouchableOpacity, View, StyleSheet } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { INavigation } from '../../../app/interface'
import { AppStyles } from '../../../app/style'
import { notifyError, notifySuccess } from '../../../helpers'
import { createTask } from '../api'
import { loadBucketList, loadTasks, selectBucketListDropdown, selectLoading, selectPage, setLoading } from '../store'
import { styles } from '../styled'
import DropDownPicker from 'react-native-dropdown-picker';
import { prioritiesData } from '../data'
import { BucketResponseType } from '../type'
import { getBucketDropdown } from '../helper'
import { KeyBoardAvoidingWrap } from '../../../assets'

export const AddEditTask = ({navigation}:INavigation) => {

    const dispatch = useDispatch()
    const loading: boolean = useSelector(selectLoading)
    const page: number = useSelector(selectPage)
    const bucketItems: BucketResponseType[] = useSelector(selectBucketListDropdown)

    const [name, setName] = useState<string|undefined>()
    const [description, setDescription] = useState<string|undefined>()
    const [openPriority, setOpenPriority] = useState(false);
    const [priority, setPriority] = useState(null);
    const [priorities, setPriorities] = useState(prioritiesData);

    const [openBucketList, setOpenBucketList] = useState(false);
    const [bucket, setBucket] = useState(null);
    const [buckets, setBuckets] = useState(getBucketDropdown(bucketItems));

    const handleSubmit = async () => {
      if(!name || !description || !priority){
          notifyError('Empty', 'All field are required.')
          return
      }
      dispatch(setLoading(true))
      const post ={
          name,
          description,
          priority,

      }
      const response = await createTask(post)
      if(response.id){
          notifySuccess('Congratulations','Task added successfully.')
          dispatch(loadTasks(page, 10))
          navigation.navigate('TaskList', {})
      }
      dispatch(setLoading(false))
    }

    useEffect(()=>{
      dispatch(loadBucketList())
    },[dispatch])

    useEffect

    return (
      <KeyBoardAvoidingWrap>
        <SafeAreaView style={styles.container}>
          <Text style={styles.inputTitle}>Add Task</Text>
          <View style={styles.InputContainer}>
            <DropDownPicker
              open={openPriority}
              value={priority}
              items={priorities}
              setOpen={setOpenPriority}
              setValue={setPriority}
              setItems={setPriorities}
            />
          </View>
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
          <View style={styles.InputContainer}>
            <DropDownPicker
              open={openBucketList}
              value={bucket}
              items={getBucketDropdown(bucketItems)}
              setOpen={setOpenBucketList}
              setValue={setBucket}
              setItems={setBuckets}
              searchable={true}
            />
          </View>
          {loading && <ActivityIndicator
            style={{ marginTop: 30 }}
            size={'large'}
            animating={loading}
            color={AppStyles.color.tint}
          />}
          {!loading &&<TouchableOpacity style={styles.submitButtonArea} onPress={handleSubmit}>
            <Text style={styles.submitButton}>Add Task</Text>
          </TouchableOpacity>}
        </SafeAreaView>
      </KeyBoardAvoidingWrap>
    )
}