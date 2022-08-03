import React, {useState, useEffect} from 'react';
import './App.css';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';
import axios from 'axios';

function App() {

  const [todos, setTodos] = useState([]);  

  useEffect(() => {
    getTodos();
  }, []);
  
  const url = "https://todolistshellcatch.herokuapp.com";  //url de la api

  //Trae todos los todos de la bd mediante el api
  const getTodos = async ()=>{
    const query = await axios.get(url + '/api/todos');
    //console.log(result.data);
    setTodos(query.data);
  }

  //Agrega un nuevo todo, mandandolo desde todo form a la api
  const addTodo = (todo)=>{
    //console.log(todo)
    let newTodo = {task:todo}  
    
    //Mandamos el nuevo todo a la api
    const query = async ()=>{
      try{
        const result = await axios.post(url + '/api/addtodo', newTodo);
        //console.log(result.data);
      }
      catch(err){console.log(err);}
    }

    query();  //mandamos el todo a la api para que lo guarde en la bd
    setTodos([...todos, newTodo])  //agregamos ese todo al usestate para mostrarlo
  }

  //Elimina un todo pasandole el id a la api desde el todo item
  const DeleteTodo = (id)=>{
    //console.log('delete', id)

    //mandamos el id a eliminar a la api
    const query = async ()=>{
      try{
        const result = await axios.delete(url + '/api/todo/' +id);
        //console.log(result.data);
      }
      catch(err){console.log(err);}
    }

    query();
    getTodos();
  }

  return (
    <div className='todo-app'>
      <h1>Cuales son tus tareas de hoy?</h1>
      <TodoForm addTodo={addTodo}/>
      <TodoList todos={todos} DeleteTodo={DeleteTodo}/>  
    </div>
  );
}

export default App;
