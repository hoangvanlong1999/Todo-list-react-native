import { StyleSheet} from 'react-native';
const styles = StyleSheet.create({
    form: {
        padding: 50,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
      },
    
      textInput: {
        padding: 15,
        fontSize: 20,
        backgroundColor: 'white',
        width: '80%',
        backgroundColor: 'white',
        height: 50,
        borderRadius: 50,
        justifyContent: 'center',
        paddingLeft: 20,
      },
      buttonForm: {
        backgroundColor: 'blue',
        width: 50,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 100,
      },
      buttonItem: {
        fontSize: 35,
        color: 'white',
      },
});

export default styles;