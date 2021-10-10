import dateFormat from 'dateformat';
import React, { useEffect } from 'react'
import { ActivityIndicator, SafeAreaView, Text, TouchableOpacity, View } from "react-native"
import { ScrollView } from 'react-native-gesture-handler';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import { useDispatch, useSelector } from 'react-redux';
import { INavigation } from '../../../app/interface';
import { getPriorityByValue } from '../helper';
import { loadTasks, selectTaskList, selectLoading, selectPage, loadTask } from '../store';
import { styles } from '../styled';
import { TaskResponseType } from '../type';

const Item = ({ item, navigation }:{item: TaskResponseType, navigation: any}) => {
    const dispatch = useDispatch()
    const priority = getPriorityByValue(item.priority)
    const handleSelect = (id: number) => {
        dispatch(loadTask(id))
        navigation.navigate('ShowTask')
    }
    return (
        <View style={styles.itemContent}>
            <View style={styles.itemTaskLeft}>
                <Text style={styles.itemTaskText}><FontAwesome5Icon name={'tasks'} color={'blue'} size={25}/> {item.name}</Text>
                <Text style={{color:'#fff', textAlign:'center', fontSize: 16, backgroundColor: priority?.color, width: '40%', padding: 5, marginTop:10}}>{priority?.label}</Text>
                <Text style={{color:'#000', textAlign:'center', fontSize: 16, backgroundColor: '#f1f1f1', width: '60%', padding: 5, marginTop:10}}>{item.deadline_at?dateFormat(item.deadline_at,'ddd, mmm dS, yy, h:MM:ss TT'):'NA'}</Text>
            </View>
            <TouchableOpacity style={styles.itemTaskRight} onPress={()=>handleSelect(item.id)}>
                <FontAwesome5Icon name={'chevron-right'} color={'white'} size={20}/>
            </TouchableOpacity>
        </View>
    )
};

export const TaskList =({navigation}:INavigation) => {

    const dispatch = useDispatch()
    const loading: boolean = useSelector(selectLoading)
    const buckets: TaskResponseType[] = useSelector(selectTaskList)
    const page: number = useSelector(selectPage)

    const handleAddEditButton = () => {
        navigation.navigate('AddEditTask')
    }

    useEffect(()=>{
        dispatch(loadTasks(page, 10))
    },[dispatch, page])

    return (
        <SafeAreaView style={styles.container}>
            {loading && <ActivityIndicator/>}
            {!loading && <TouchableOpacity style={styles.addButtonView} onPress={handleAddEditButton}>
                <Text style={styles.addButton}>
                    <FontAwesome5Icon name={'plus'} size={20}/> Add Task
                </Text>
            </TouchableOpacity>}
            {!loading && <ScrollView style={styles.itemContainer}>
               {buckets.map((bucket: TaskResponseType, index: number)=>{
                   return (<Item key={`item-${index}`} item={bucket} navigation={navigation}/>)
               })}
            </ScrollView>}
        </SafeAreaView>
    )
}