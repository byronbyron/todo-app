import React, { useState } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import data from '../data.json'
import Todo from '../components/Todo.js'
import TodoForm from '../components/TodoForm.js'

export default function Home() {
  const [ todos, setTodos ] = useState(data);

  const itemsNoun = todos.length !== 1 ? 'items' : 'item';

  function toggleCompletedTodo(id) {
    const updatedTodo = todos.map(todo => {
      if (id === todo.id) {
        return {...todo, completed: !todo.completed}
      }
      return todo;
    });

    setTodos(updatedTodo);
  }


  function removeTodo(id) {
    const remainingTodos = todos.filter(todo => id !== todo.id);
    
    setTodos(remainingTodos);
  }

  function addTask(value) {
    const newTodo = { id: todos.length + 1, title: value, completed: false };
    
    setTodos([...todos, newTodo]);
  }

  return (
    <div>
      <Head>
        <title>Frontend Mentor | Todo app</title>
        <meta name="description" content="Todo app" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      </Head>

      <header className="header container">
        <div className="row">
          <h1 className="title">Todo</h1>

          <div>
            <button className="btn-theme">
              <Image src="/icon-sun.svg" alt="" width="20" height="20" />
            </button>
          </div>
        </div>
      </header>

      <main className="main container">
        <div className="row">
          <TodoForm addTask={addTask} />

          <ul className="todo-list">
            {todos.map((todo) => {
              return (
                <Todo
                  todo={todo}
                  toggleCompletedTodo={toggleCompletedTodo}
                  removeTodo={removeTodo}
                  key={todo.id}
                />
              );
            })}
          </ul>

          <div className="todo-controls">
            <div>
              {todos.length} {itemsNoun} left
            </div>

            <div>
              <button>Clear Completed</button>
            </div>
          </div>

          <div className="todo-filters">
            <button>All</button>
            <button>Active</button>
            <button>Completed</button>
          </div>

          <p>Drag and drop to reorder list</p>
        </div>
      </main>

      <footer>
        Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank" rel="noopener noreferrer">Frontend Mentor</a>. Coded by <a href="https://twitter.com/bwalkermills" target="_blank" rel="noopener noreferrer">Byron</a>.
      </footer>
    </div>
  )
}
