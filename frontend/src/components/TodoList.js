import React from 'react';
import TodoItem from './TodoItem';

function todoList({todos,DeleteTodo}) {
    return (
        <div className='todo-list'>
            {
                //iteramos los todos uno por uno para mostarlos
                todos.map((todo, index)=>(
                    <TodoItem key={index} todo={todo} DeleteTodo={DeleteTodo}/>  //mostramos el todo en otro componente
                ))
            }
        </div>
    )
}

export default todoList;
