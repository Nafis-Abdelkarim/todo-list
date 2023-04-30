import React, {useState} from 'react'

export const EditTodoForm = ({editTodo, task}) => {
    const [value, setValue] = useState('');

    const handleSubmit = (e) => {
      // prevent default action
        e.preventDefault();
        if (value) {
          // Edit todo
            editTodo(value, task.id);
          // clear form after submission
            setValue('');
        }
        };
    return (
        <form onSubmit={handleSubmit} className="TodoForm">
            
            <input type="text" value={value} 
            onChange={(e) => setValue(e.target.value)} className="todo-input" 
            placeholder='Update your todo' />

            <button type="submit" className='todo-btn'>Update Task</button>
        </form>
    )
}
