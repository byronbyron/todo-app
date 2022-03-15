import React, { useState } from 'react'

export default function TodoForm({ addTask }) {
    const [ value, setValue ] = useState('');

    function handleSubmit(e) {
        e.preventDefault();
        if (!value.trim()) {
            return;
        }
        addTask(value);
        setValue('');
    }

    function handleChange(e) {
        setValue(e.target.value);
    }

    return (
        <form className="todo-form" onSubmit={handleSubmit}>
          <label htmlFor="todo" className="sr-only">Create a new todo</label>
          <input type="text" name="todo" id="todo" placeholder="Create a new todo..." className="todo-input" value={value} onChange={handleChange} />
        </form>
    )
}
