import React, { useState } from "react";

const TodoForm = ({addTodo}) => {
    const [value, setValue] = useState("");

    const handelSubmit = (e) => {
        //adding prevent default to prevent page reload <hen submitting the task 
        e.preventDefault();

        addTodo(value);

        //setValue("")
    }

    return(
        <form className="TodoForm" onSubmit={handelSubmit}>
            <input type="text" className="todo-input" value={value} placeholder="What todo for to day ?"
            onChange={(e) => {setValue(e.target.value)}}></input>
            <button type="submit" className="todo-btn">Add Task</button>
        </form>
    )
}

export default TodoForm