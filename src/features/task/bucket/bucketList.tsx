import React, { useEffect } from 'react'
import { ActivityIndicator, SafeAreaView, Text, TouchableOpacity, View } from "react-native"
import { ScrollView } from 'react-native-gesture-handler';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import { useDispatch, useSelector } from 'react-redux';
import { INavigation } from '../../../app/interface';
import { notifyError } from '../../../helpers';
import { loadBuckets, selectBucketList, selectLoading, selectPage } from '../store';
import { styles } from '../styled';
import { BucketResponseType } from '../type';

const Item = ({ item }:{item: BucketResponseType}) => (
    <View style={styles.itemContent}>
        <View style={styles.itemLeft}>
            <Text style={styles.itemText}><FontAwesome5Icon name={'bitbucket'} color={'green'} size={25}/> {item.name}</Text>
            <Text style={{color:'#000', fontSize: 12, backgroundColor: '#f1f1f1', width: '30%', padding: 5, marginTop:10}}>Tasks: {item.tasks.length}</Text>
        </View>
        <TouchableOpacity style={styles.itemRight} onPress={()=>notifyError('Not Implemented','This feature is pending.')}>
            <FontAwesome5Icon name={'chevron-right'} color={'white'} size={20}/>
        </TouchableOpacity>
    </View>
);

export const BucketList =({navigation}:INavigation) => {

    const dispatch = useDispatch()
    const loading: boolean = useSelector(selectLoading)
    const buckets: BucketResponseType[] = useSelector(selectBucketList)
    const page: number = useSelector(selectPage)

    const handleAddEditButton = () => {
        navigation.navigate('AddEditBucket')
    }

    useEffect(()=>{
        dispatch(loadBuckets(page, 10))
    },[dispatch, page])

    return (
        <SafeAreaView style={styles.container}>
            {loading && <ActivityIndicator/>}
            {!loading && <TouchableOpacity style={styles.addButtonView} onPress={handleAddEditButton}>
                <Text style={styles.addButton}>
                    <FontAwesome5Icon name={'plus'} size={20}/> Add Bucket
                </Text>
            </TouchableOpacity>}
            {!loading && <ScrollView style={styles.itemContainer}>
               {buckets.map((bucket: BucketResponseType, index: number)=>{
                   return (<Item key={`item-${index}`} item={bucket}/>)
               })}
            </ScrollView>}
        </SafeAreaView>
    )
}