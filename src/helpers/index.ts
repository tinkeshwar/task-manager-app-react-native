import { Alert } from 'react-native';

export const notifyError = (error: string, message: string) => {
    Alert.alert(error, message);
} 