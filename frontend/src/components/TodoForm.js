import React, {useState} from 'react';

function TodoForm({addTodo}) {

    //todo que el usuario escriba
    const [userInput, setUserInput] = useState(); 

    //cuando se actualiza el input (cuando el usuario escribe) se ejectua esta funcion
    const handleOnChange = (e)=>{
        setUserInput(e.currentTarget.value);
    }

    //Cuando se envian los valores del formulario es ejecuta esta funcion
    const handleSubmit = (e)=>{
        e.preventDefault();
        if(userInput.trim() !== ''){    //si el texto que envio el usuario no esta vacio, entonces lo enviamos a los todos
            addTodo(userInput);
            setUserInput('');
        }
    }


  return (
    //Formulario para añadir todos a la lista
    <form className='todo-form' onSubmit={handleSubmit}>
        <input className='todo-input'placeholder='Add to do...' type='text' value={userInput} onChange={handleOnChange}/>
        <button className='todo-button'>Add todo</button>
    </form>
  )
}

export default TodoForm;
