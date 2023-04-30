import React, { useState } from "react";
import { Todo } from "./Todo";
import { TodoForm } from "./TodoForm";
import { v4 as uuidv4 } from "uuid";
import { EditTodoForm } from "./EditTodoForm";

    const TodoWrapper = () => {
    const [todos, setTodos] = useState([]);

    const addTodo = (todo) => {
    setTodos([
        ...todos,
        { id: uuidv4(), task: todo, completed: false, isEditing: false },
        ]);
    }

    const toggelComplete = id =>{
        setTodos(todos.map(todo => todo.id === id ? 
            {...todo, completed: !todo.completed} : todo))
    }

    const deleteTodo = id =>{
        setTodos(todos.filter(todo => todo.id === id ?
            {...todo, isEditing: !todo.isEditing} : todo))
    }

    const editTodo = id =>{
        setTodos(todos.map(todo => todo.id === id ))
    }

    return (
    <div className="TodoWrapper">
        <h1>Get Things Done !</h1>
        <TodoForm addTodo={addTodo} />
      {/* display todos */}
        {todos.map((todo,index) =>(
        todo.isEditing ? (
        <EditTodoForm/>
        ) : (
            <Todo task={todo} key={index} 
            toggelComplete={toggelComplete}
            deleteTodo={deleteTodo}
            editTodo={editTodo}/>
        )
        
        ))}
    </div>
);
};

export default TodoWrapper