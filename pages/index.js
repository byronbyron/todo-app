import React, { useState } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import data from '../data.json'
import Todo from '../components/Todo.js'

export default function Home() {

  const [ todos, setTodos ] = useState(data);

  const addTodo = (e) => {
    e.preventDefault();

    if (e.target.todo.value === '') return;

    const newTodo = {
      id: todos.length + 1,
      title: e.target.todo.value,
      completed: false
    }

    const newTodos = [...todos, { ...newTodo }];
    setTodos(newTodos);
  };

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
          <form className="todo-form" onSubmit={addTodo}>
            <label htmlFor="todo" className="sr-only">Create a new todo</label>
            <input type="text" name="todo" id="todo" placeholder="Create a new todo..." className="todo-input" />
          </form>

          <ul className="todo-list">
            {todos.map((todo, i) => {
              return (
                <Todo todo={todo} key={i} />
              );
            })}
          </ul>

          <div className="todo-controls">
            <div>
              {todos.length} items left
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
