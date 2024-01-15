import { StyleSheet} from 'react-native';
const styles = StyleSheet.create({
    item: {
        color: 'blue',
        backgroundColor: 'white',
        padding: 10,
        borderRadius: 8,
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin : 5
    },
    FormItemText: {
        width: '80%',
        justifyContent: 'center',
    },

    itemText: {
        fontSize: 30,

    },
    FormNumber: {
        width: 50,
        height: 50,
        backgroundColor: 'blue',
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
    },
    number: {
        fontSize: 30,
        color: 'white'
    },
});

export default styles;