import dateFormat from 'dateformat'
import React from 'react'
import { SafeAreaView, Text, TouchableOpacity, View } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5'
import { useDispatch, useSelector } from 'react-redux'
import { INavigation } from '../../../app/interface'
import { patchTask } from '../api'
import { getPriorityByValue, getPriorityItemByValue, parseHistory } from '../helper'
import { loadTask, selectTask, setLoading } from '../store'
import { styles } from '../styled'
import { TaskResponseType } from '../type'

export const ShowTask = ({navigation}:INavigation) => {

    const dispatch = useDispatch()
    const task: TaskResponseType = useSelector(selectTask)

    const markHandle = async (id: number) => {
        dispatch(setLoading(true))
        await patchTask(id)
        dispatch(loadTask(id))
        dispatch(setLoading(false))
    }

    const editHandle = async (id: number) => {
        dispatch(setLoading(true))
        dispatch(loadTask(id))
        navigation.navigate('EditTask')
        dispatch(setLoading(false))
    }

    const deleteHandle = async (id: number) => {

    }

    return (
        <SafeAreaView style={styles.showTitleContainer}>
            <View style={{flexDirection:'row', alignItems: 'flex-end'}}>
                <TouchableOpacity style={{
                        marginTop: 10,
                        marginBottom: 20,
                        backgroundColor: 'blue',
                        padding: 10,
                        paddingHorizontal: 30,
                        borderRadius: 5
                    }}
                    onPress={()=>editHandle(task.id)}
                >
                    <Text style={styles.addButton}>Edit</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{
                        marginTop: 10,
                        marginBottom: 20,
                        backgroundColor: 'red',
                        padding: 10,
                        paddingHorizontal: 30,
                        borderRadius: 5,
                        marginLeft: 5
                    }}
                    onPress={()=>deleteHandle(task.id)}
                >
                    <Text style={styles.addButton}>Delete</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{
                        marginTop: 10,
                        marginBottom: 20,
                        backgroundColor: 'gray',
                        padding: 10,
                        paddingHorizontal: 30,
                        borderRadius: 5,
                        marginLeft: 5
                    }}
                    onPress={()=>markHandle(task.id)}
                >
                    <Text style={styles.addButton}>Mark As {task.is_complete?'Incomplete':'Complete'}</Text>
                </TouchableOpacity>
            </View>
            <ScrollView>
                <View style={styles.showTitleView}>
                    <Text style={styles.showTitle}>{task.name}</Text>
                </View>
                <View style={styles.showDescriptionView}>
                    <Text style={styles.showDescription}>{task.description}</Text>
                </View>
                <View style={styles.showSubItemView}>
                    <Text>Bucket</Text>
                    <Text style={styles.showSubItem}>{task?.bucket?.name ||'No Bucket Assigned'}</Text>
                </View>
                <View style={styles.showSubItemView}>
                    <Text>Priority</Text>
                    <Text style={{fontSize: 22, color: (getPriorityByValue(task.priority)?.color)}}>{getPriorityItemByValue(task.priority, 'label')}</Text>
                </View>
                <View style={styles.showDeadlineView}>
                    <Text>Deadline Date</Text>
                    <Text style={styles.showDeadline}>{task.deadline_at? dateFormat(task.deadline_at, 'dddd, mmmm dS, yyyy, h:MM:ss TT'):'No Deadline Assigned'}</Text>
                </View>
                <View style={styles.showDeadlineView}>
                    <Text>Status</Text>
                    <Text style={styles.showDeadline}>{task.status?task.status.toUpperCase():''}</Text>
                </View>
                <View style={styles.showHistoryView}>
                    <Text style={{borderBottomColor:'black',borderBottomWidth:1}}>Progress Event History</Text>
                    {task?.history?.length>0 && task.history.map((history, index)=>{
                        const historyData = parseHistory(history)
                        return (
                            <View key={`history-${index}`} style={{alignItems: 'center'}}>
                                <FontAwesome5Icon name={'arrow-down'} size={20} color={'red'} style={{marginTop: 20, marginBottom: 10}}/>
                                <Text style={styles.showHistory}>{historyData.status.toUpperCase()}</Text>
                                <Text>{dateFormat(historyData.updatedAt, "dddd, mmmm dS, yyyy, h:MM:ss TT")}</Text>
                            </View>
                        )
                    })}
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}