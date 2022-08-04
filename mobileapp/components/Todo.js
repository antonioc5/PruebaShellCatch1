import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const Todo = ({todo, deleteTodo}) => {

  return (
    <TouchableOpacity style={styles.todoItem} onPress={() => deleteTodo(todo._id)}>
        <Text style={styles.todoText}>{todo.task}</Text>  
        <View style={styles.circular}></View>     
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  todoItem: {
    backgroundColor: '#FFF',
    padding: 15,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  itemText: {
    maxWidth: '80%',
  },
  circular: {
    width: 12,
    height: 12,
    borderColor: '#55BCF6',
    borderWidth: 2,
    borderRadius: 5,
  },
});

export default Todo;