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

    return (
    <div className="TodoWrapper">
        <h1>Get Things Done !</h1>
        <TodoForm addTodo={addTodo} />
      {/* display todos */}
        {todos.map((todo) =>(<Todo key={todo.id} task={todo}/>
        )
    )}
    </div>
);
};

export default TodoWrapper