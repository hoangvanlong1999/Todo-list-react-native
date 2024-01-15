import React, { useState } from 'react';
import { Platform , KeyboardAvoidingView, Text, TextInput, TouchableOpacity, View, Keyboard } from 'react-native';
import styles from './style';
function Form(props) {
    const [job,setJob] = useState('');
    const handleSubmit = () => {
      if(job.length === 0){
        alert('Bạn chưa nhập công việc!');
        Keyboard.dismiss();
        return false;
      }
      props.onSubmit(job);
      setJob('');
    }
    const handleOnchange = (value) => {
      setJob(value);
    }
    return (
        <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={styles.form}>
        <TextInput value={job} onChangeText={handleOnchange} style={styles.textInput} />
        <TouchableOpacity onPress={handleSubmit} style={styles.buttonForm}>
          <View>
            <Text style={styles.buttonItem}>+</Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    );
}

export default Form;