import { Alert, Platform } from 'react-native';
import Toast from 'react-native-toast-message';

export const notifyError = (error: string, message: string) => {
    if(Platform.OS === 'android' || Platform.OS === 'ios'){
        Alert.alert(error, message);
    } else {
        Toast.show({type: 'error', text1: error, text2: message});
    }
} 

export const notifySuccess = (type: string, message: string) => {
    if(Platform.OS === 'android' || Platform.OS === 'ios'){
        Alert.alert(type, message);
    } else {
        Toast.show({type: 'success', text1: 'Success!', text2: message});
    }
} 