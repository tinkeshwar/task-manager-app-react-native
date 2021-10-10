import dateFormat from 'dateformat'
import React from 'react'
import { SafeAreaView, Text, View } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5'
import { useSelector } from 'react-redux'
import { getPriorityByValue, getPriorityItemByValue, parseHistory } from '../helper'
import { selectTask } from '../store'
import { styles } from '../styled'
import { TaskResponseType } from '../type'

export const ShowTask = () => {
    const task: TaskResponseType = useSelector(selectTask)

    return (
        <SafeAreaView style={styles.showTitleContainer}>
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
                    <Text style={{borderBottomColor:'black',borderBottomWidth:1}}>History</Text>
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