import React, { useState } from "react";
import { Todo } from "./Todo";
import { TodoForm } from "./TodoForm";
import { v4 as uuidv4 } from "uuid";

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

    return (
    <div className="TodoWrapper">
        <h1>Get Things Done !</h1>
        <TodoForm addTodo={addTodo} />
      {/* display todos */}
        {todos.map((todo) =>(<Todo key={todo.id} task={todo} toggelComplete={toggelComplete}/>
        )
    )}
    </div>
);
};

export default TodoWrapper