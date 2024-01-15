import React, { useState } from 'react'
import { StyleSheet, Text, View, Keyboard ,ScrollView } from 'react-native';
import Task from './task/Task';
import Form from '../form/Form';

export default function Masterlayout() {
  const [tasklist,setTasklist] = useState([]);
  const handleOnSubmit = (task) => {
    setTasklist([...tasklist,task]);
    Keyboard.dismiss();
  }
  const handleDelete = (indexDelete) => {
    const updatedTasklist = [...tasklist];
    updatedTasklist.splice(indexDelete, 1);
    setTasklist(updatedTasklist);
    alert('Xóa Thành Công!');
  };
  return (
    <View
      style={styles.container}
    >
      <ScrollView  style={styles.body}>
        <Text style={styles.header}>Todo List</Text>
        {tasklist.map((task,index) => {
          return <Task handleDelete={handleDelete} index={index} taskName={task}/> ;
        })}
      </ScrollView>
      <Form onSubmit={handleOnSubmit}/>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(211, 211, 211)',
  },
  body: {
    flex: 1,
    padding: 50,
  },
  header: {
    fontSize: 50,
    color: 'blue',
    padding: 10,
    borderRadius: 8,
  },

});

