import { StyleSheet } from 'react-native';
import { AppStyles } from '../../../app/style';
export const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center'
    },
    title: {
      fontSize: AppStyles.fontSize.title,
      fontWeight: 'bold',
      color: AppStyles.color.tint,
      alignItems: 'center'
    },
    content: {
      paddingLeft: 50,
      paddingRight: 50,
      textAlign: 'center',
      fontSize: AppStyles.fontSize.content,
      color: AppStyles.color.text
    },
    forgetLinkContainer: {
      marginTop: 10
    },
    loginButtonContainer: {
      width: '50%',
      backgroundColor: AppStyles.color.tint,
      padding: 10,
      marginTop: 30
    },
    registerButtonContainer: {
      width: '50%',
      backgroundColor: AppStyles.color.blue,
      padding: 10,
      marginTop: 10
    },
    InputContainer: {
      width: AppStyles.textInputWidth.main,
      marginTop: 30,
      borderWidth: 1,
      borderStyle: 'solid',
      borderColor: AppStyles.color.grey,
      borderRadius: AppStyles.borderRadius.main
    },
    body: {
      height: 40,
      paddingLeft: 20,
      paddingRight: 20,
      color: AppStyles.color.text
    },
    loginButton: {
      color: '#fff',
      textAlign: 'center',
      padding: 5,
      fontSize: 20
    }
});

export { AppStyles }