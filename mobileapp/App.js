import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { KeyboardAvoidingView, StyleSheet, Text, View, TextInput, TouchableOpacity, Keyboard, ScrollView } from 'react-native';
import Todo from './components/Todo';

export default function App() {

  const url = "https://todolistshellcatch.herokuapp.com";  //url de la api

  const [todos, setTodos] = useState([]);  //state para mostrar los todos  
  const [todo, setTodo] = useState();  //state para guardar el todo

  useEffect(() => {
    getTodos();
  }, []);  //cuando cargen compenentes se llama la funcion getTodos

  const getTodos = async ()=>{
    const req = await axios.get(url + '/api/todos');  //accedemos a la api para traer los todos de la bd
    setTodos(req.data);
  }

  const deleteTodo = (id)=>{
    const req = async()=>{
      const res = await axios.delete(url + '/api/todo/' +id);  //mandamos el id a la api para que borre ese todo
    }
    req();
    getTodos();
  }

  const addTodo = ()=>{
    if(todo.trim() != ''){
      let newTodo = {task:todo} //guardamos el nuevo todo

      const req = async ()=>{
        const res = await axios.post(url + '/api/addtodo', newTodo);  //mandamos el nuevo todo a la api
      }
      req();
    }
    else
      alert('No puedes enviar un todo vacio')
    
    Keyboard.dismiss();
    getTodos();
    setTodo(null);
  }

  return (
    <View>
      <Text style={styles.titulo}>Tareas para hoy...</Text>
      
      {/*Mostrar los todos en un scrollview */}
       <ScrollView style={styles.todoList}>
        {
          todos.length>0 
          ? 
            todos.map((todo,index)=>{
              return(
                <Todo key={index} todo={todo} deleteTodo={deleteTodo}/> 
              )
            })
          : 
          (<Text style={{textAlign: 'center'}}>No hay todos para hoy...</Text>)
        }
      </ScrollView> 


      {/*Mostrar formulario para añadir todos*/}
      <KeyboardAvoidingView 
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.todoForm}
      >
        <TextInput style={styles.input} placeholder={'Escribe un todo'} value={todo} onChangeText={text => setTodo(text)} />
        <TouchableOpacity style={styles.addButton} onPress={() => addTodo()}>
          <Text>+</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titulo:{
    fontSize: 24,
    fontWeight: 'bold',
    marginTop:60,
    textAlign: 'center'
  },
  todoList:{
    marginTop: 30,
  },
  todoForm:{
    marginTop: 60,
    marginBottom: 60,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
 },
  input: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    backgroundColor: '#FFF',
    borderRadius: 60,
    borderColor: '#C0C0C0',
    borderWidth: 1,
    width: 250,
  },
  addButton: {
    width: 60,
    height: 60,
    backgroundColor: '#FFF',
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#C0C0C0',
    borderWidth: 1,
  },
});
