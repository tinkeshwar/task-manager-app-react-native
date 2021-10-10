import { StyleSheet } from "react-native";
import { AppStyles } from "../../../app/style";

export const styles = StyleSheet.create({
    //add and list page
    container: {
        flex: 1,
        alignItems: 'center'
    },
    itemContainer: {
        width: '100%',
    },
    itemContent: {
        flexDirection: 'row',
        backgroundColor: AppStyles.color.white,
        borderRadius: 5,
        marginVertical: 5,
        marginHorizontal: 10,
        padding: 20
    },
    itemLeft:{
        justifyContent: 'center',
        width:'85%'
    },
    itemRight:{
        width:'15%',
        justifyContent: 'center',
        backgroundColor:AppStyles.color.green,
        alignItems: 'center',
        borderRadius: 4,
        paddingVertical: 10
    },
    itemText: {
        color: AppStyles.color.green,
        fontSize: 20,
    },
    itemTaskLeft:{
        justifyContent: 'center',
        width:'85%'
    },
    itemTaskRight:{
        width:'15%',
        justifyContent: 'center',
        backgroundColor: 'blue',
        alignItems: 'center',
        borderRadius: 4,
        paddingVertical: 10
    },
    itemTaskText: {
        color: 'blue',
        fontSize: 20,
    },
    itemSubText: {
        paddingTop:5,
        color: '#000',
        fontSize: 12,
        width: '80%',
        textAlign: 'justify'
    },
    addButtonView: {
        marginTop: 10,
        marginBottom: 20,
        backgroundColor: AppStyles.color.tint,
        padding: 10,
        paddingHorizontal: 30,
        borderRadius: 5
    },
    addButton: {
        color: '#fff',
        fontSize: 20
    },

    inputTitle: {
        fontSize: AppStyles.fontSize.title,
        fontWeight: 'bold',
        color: AppStyles.color.tint,
        alignItems: 'center'
    },
    InputContainer: {
        width: AppStyles.textInputWidth.main,
        backgroundColor: AppStyles.color.white,
        marginTop: 30,
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor: AppStyles.color.grey,
        borderRadius: AppStyles.borderRadius.small
    },
    InputBody: {
        height: 40,
        paddingLeft: 20,
        paddingRight: 20,
        color: AppStyles.color.text
    },
    InputTextAreaBody: {
        height: 100,
        padding: 20,
        color: AppStyles.color.text
    },
    submitButtonArea:{
        width: '50%',
        backgroundColor: AppStyles.color.tint,
        padding: 10,
        marginTop: 30
    },
    submitButton:{
        color: '#fff',
        textAlign: 'center',
        padding: 5,
        fontSize: 20
    },

    //show page
    showTitleContainer: {
        flex: 1,
        paddingHorizontal: 5,
        backgroundColor: '#fff'
    },
    showTitleView: {
        marginTop: 10,
        paddingHorizontal: 10,
        borderRadius: 5
    },
    showTitle: {
        fontSize: 35,
        color: '#000',
        fontWeight: "700"
    },
    showDescriptionView: {
        marginTop: 5,
        paddingHorizontal: 10,
        paddingVertical: 10,
        borderTopColor: 'black',
        borderTopWidth: 1,
    },
    showDescription: {
        fontSize: 16,
        color: '#717a83'
    },
    showSubItemView: {
        paddingHorizontal: 10,
        paddingVertical: 20,
        borderTopColor: 'black',
        borderTopWidth: 1,
    },
    showSubItem: {
        fontSize: 22,
    },
    showDeadlineView: {
        paddingHorizontal: 10,
        paddingVertical: 20,
        borderTopColor: 'black',
        borderTopWidth: 1,
    },
    showDeadline: {
        fontSize: 22,
    },
    showHistoryView: {
        alignItems: 'center',
        paddingHorizontal: 10,
        paddingVertical: 20,
        borderTopColor: 'black',
        borderTopWidth: 1,
    },
    showHistory: {
        fontSize: 22
    }
});