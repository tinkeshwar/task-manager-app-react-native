import React, { useEffect, useState } from 'react'
import { ActivityIndicator, SafeAreaView, Text, TextInput, TouchableOpacity, View, StyleSheet, Platform } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { INavigation } from '../../../app/interface'
import { AppStyles } from '../../../app/style'
import { notifyError, notifySuccess } from '../../../helpers'
import { updateTask } from '../api'
import { loadBucketList, loadTasks, selectBucketListDropdown, selectLoading, selectPage, selectTask, setLoading } from '../store'
import { styles } from '../styled'
import { prioritiesData } from '../data'
import { BucketResponseType, TaskResponseType } from '../type'
import { KeyBoardAvoidingWrap } from '../../../assets'
import {Picker} from '@react-native-picker/picker';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import dateFormat from 'dateformat';

export const EditTask = ({navigation}:INavigation) => {

    const dispatch = useDispatch()
    const loading: boolean = useSelector(selectLoading)
    const task: TaskResponseType = useSelector(selectTask)
    const page: number = useSelector(selectPage)
    const bucketItems: BucketResponseType[] = useSelector(selectBucketListDropdown)

    const [name, setName] = useState<string|undefined>()
    const [description, setDescription] = useState<string|undefined>()
    const [priority, setPriority] = useState<number|string>('');
    const [bucket, setBucket] = useState<number|string|null>('');
    const [showdeadline, setSetShowDeadline] = useState<string>('')
    const [deadline, setDeadline] = useState<string|null>(null)
    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

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
          bucket_id: bucket,
          deadline_at: deadline||null
      }
      console.log(post)
      const response = await updateTask(task.id, post)
      if(response.id){
          notifySuccess('Congratulations','Task updated successfully.')
          dispatch(loadTasks(page, 10))
          navigation.navigate('TaskList', {})
      }
      dispatch(setLoading(false))
    }

    const showDatePicker = () => {
      setDatePickerVisibility(true);
    };
  
    const hideDatePicker = () => {
      setDatePickerVisibility(false);
    };
  
    const handleConfirm = (date: any) => {
      const freshDate = dateFormat(date, "dddd, mmmm dS, yyyy, h:MM:ss TT")
      setSetShowDeadline(freshDate)
      setDeadline(date)
      hideDatePicker();
    }

    useEffect(()=>{
      dispatch(loadBucketList())
    },[dispatch])

    useEffect(()=>{
      setName(task.name)
      setPriority(task.priority)
      setDescription(task.description)
      setBucket(task.bucket_id||null)
      setDeadline(task.deadline_at?`${task.deadline_at}`:null)
      setSetShowDeadline(task.deadline_at?dateFormat(task.deadline_at, "dddd, mmmm dS, yyyy, h:MM:ss TT"):'')
    },[task])

    return (
      <KeyBoardAvoidingWrap>
        <SafeAreaView style={styles.container}>
          <Text style={styles.inputTitle}>Edit Task :: {task.name}</Text>
          <View style={styles.InputContainer}>
            <Picker
              style={Platform.OS === 'ios'?{}:styles.InputBody}
              selectedValue={priority}
              onValueChange={(value)=>{
                setPriority(value)
              }}
            >
              {prioritiesData.map((priority, index)=>{
                return <Picker.Item key={`priority-key-${index}`} color={priority.color} label={priority.label} value={priority.value} />
              })}
            </Picker>
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
            <Picker
              style={Platform.OS === 'ios'?{}:styles.InputBody}
              selectedValue={bucket}
              onValueChange={(value)=>{
                setBucket(value)
              }}
            >
              {bucketItems.map((bucketData, index)=>{
                return <Picker.Item key={`bucket-key-${index}`} color={'green'} label={bucketData.name} value={bucketData.id} />
              })}
            </Picker>
          </View>
          <View style={styles.InputContainer}>
            <DateTimePickerModal
              isVisible={isDatePickerVisible}
              onConfirm={handleConfirm}
              onCancel={hideDatePicker}
              mode={'datetime'}
            />
            <TextInput
              style={styles.InputBody}
              placeholder='Deadline'
              value={showdeadline||''}
              placeholderTextColor={AppStyles.color.grey}
              underlineColorAndroid='transparent'
              onTouchEnd={showDatePicker}
            />
          </View>
          {loading && <ActivityIndicator
            style={{ marginTop: 30 }}
            size={'large'}
            animating={loading}
            color={AppStyles.color.tint}
          />}
          {!loading &&<TouchableOpacity style={styles.submitButtonArea} onPress={handleSubmit}>
            <Text style={styles.submitButton}>Update Task</Text>
          </TouchableOpacity>}
        </SafeAreaView>
      </KeyBoardAvoidingWrap>
    )
}