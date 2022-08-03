import React from 'react';
import { TiDelete } from 'react-icons/ti';

function TodoItem({todo, DeleteTodo}) {

  return (
    //mostramos el todo 
    <div className='todo-item'>
        {todo.task}
        <TiDelete className='icons' onClick={()=> DeleteTodo(todo._id)}/>
    </div>
  )
}

export default TodoItem;