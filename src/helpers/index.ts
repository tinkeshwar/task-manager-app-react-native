import { Alert, Platform } from 'react-native';

export const notifyError = (error: string, message: string) => {
    if(Platform.OS === 'android' || Platform.OS === 'ios'){
        Alert.alert(error, message);
    } else {}
} 

export const notifySuccess = (type: string, message: string) => {
    if(Platform.OS === 'android' || Platform.OS === 'ios'){
        Alert.alert(type, message);
    } else {}
} 