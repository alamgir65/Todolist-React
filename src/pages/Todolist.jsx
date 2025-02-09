import React, { useState } from 'react'

const Todolist = () => {
    const [newTodo,setNewTodo] = useState("");
    const [todos,setTodos] = useState([
        {id:1,title:"Task 1"},
        {id:2,title:"Task 2"},
        {id:3,title:"Task 3"}
    ]);
    // const todos = [
    //     {id:1,title:"Task 1"},
    //     {id:2,title:"Task 2"},
    //     {id:3,title:"Task 3"}
    // ];
    const updateNewTodo = (event) =>{
        setNewTodo(event.target.value);
        console.log(newTodo);
    }
    const saveTodo = () => {
        const newData = {id:todos[todos.length-1].id + 1,title:newTodo};
        setTodos([...todos,newData]);
        console.log(todos);
    }
  return (
    <div>
        <h2>Todolist</h2>
        <input
            placeholder='todo title here'
            value={newTodo}
            onChange={updateNewTodo}
        />
        <button onClick={saveTodo}>Save Todo</button>
        <ul>
            {todos.map((todo,index) => (
                <li key={index}>{todo.title}</li>
            ))}
        </ul>
    </div>
  )
}

export default Todolist
