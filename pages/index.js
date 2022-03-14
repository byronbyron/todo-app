import React, { useState } from 'react';
import data from "./data.json";
import Head from 'next/head'
import Image from 'next/image'

export default function Home() {

  const [ todos, setTodos ] = useState(data);

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
              <img src="icon-sun.svg" alt="" />
            </button>
          </div>
        </div>
      </header>

      <main className="main container">
        <div className="row">
          <form className="todo-form">
            <label htmlFor="todo" className="sr-only">Create a new todo</label>
            <input type="text" name="todo" id="todo" placeholder="Create a new todo..." className="todo-input" />
          </form>

          <ul className="todo-list">
            {todos.map((todo, i) => {
              return (
                <li className="todo-item" key={i}>
                  <input type="checkbox" name={`todo-${i}`} id={`todo-${i}`} className="todo-check sr-only" />
                  <label htmlFor={`todo-${i}`} className="todo-label">
                    {todo.title}
                  </label>
                  <button className="todo-delete">
                    <span className="sr-only">Delete {todo.title}</span>
                    <img src="/icon-cross.svg" alt="" />
                  </button>
                </li>
              );
            })}
          </ul>

          <div className="todo-controls">
            <div>
              {/*Add dynamic number*/}5 items left
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
