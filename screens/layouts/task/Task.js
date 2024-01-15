import React, { useState, useEffect } from 'react';
import { Text, View, TouchableOpacity, Alert } from 'react-native';
import styles from './style';

function Task(props) {
    const { index } = props;
    const number = index < 10 ? `0${index + 1}` : index;
    
    const onPressDelete = () => {
        Alert.alert('Bạn có chắc chắn muốn xóa!', 'Nhấn ok để xóa công việc.', [
            {
              text: 'Cancel',
              onPress: () => {},
              style: 'cancel',
            },
            {text: 'OK', onPress: () => props.handleDelete(index)},
          ]);
        
    };

    return (
        <TouchableOpacity onPress={onPressDelete} style={styles.item}>
            <View style={styles.FormNumber}>
                <Text style={styles.number}>{number}</Text>
            </View>
            <View style={styles.FormItemText}>
                <Text style={styles.itemText}>{props.taskName}</Text>
            </View>
        </TouchableOpacity>
    );
}

export default Task;