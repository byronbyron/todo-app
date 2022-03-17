import React, { useState, useEffect } from 'react'
import Head from 'next/head'
import data from '../data.json'
import Todo from '../components/Todo.js'
import TodoForm from '../components/TodoForm.js'
import ThemeButton from '../components/ThemeButton.js'
import FilterButton from '../components/FilterButton.js'
import { ReactSortable } from "react-sortablejs"
import { nanoid } from 'nanoid'

export default function Home() {
  const [ todos, setTodos ] = useState(data);
  const [ filter, setFilter ] = useState('All');
  const itemsNoun = todos.length !== 1 ? 'items' : 'item';
  const uncompletedTodos = todos.filter(todo => todo.completed !== true);

  const FILTER_MAP = {
    All: () => true,
    Active: task => !task.completed,
    Completed: task => task.completed
  };

  const FILTER_NAMES = Object.keys(FILTER_MAP);

  useEffect(() => {
    const localTodos = JSON.parse(localStorage.getItem('todos'));

    if (localTodos !== null) {
      setTodos(localTodos);
    }
  }, []);

  function toggleCompletedTodo(id) {
    const updatedTodo = todos.map(todo => {
      if (id === todo.id) {
        return {...todo, completed: !todo.completed}
      }
      return todo;
    });

    setTodos(updatedTodo);
    updateLocalStorage(updatedTodo);
  }

  function removeTodo(id) {
    const remainingTodos = todos.filter(todo => id !== todo.id);

    setTodos(remainingTodos);
    updateLocalStorage(remainingTodos);
  }

  function addTask(value) {
    const newTodo = { id: nanoid(), title: value, completed: false };

    setTodos([...todos, newTodo]);
    updateLocalStorage([...todos, newTodo]);
  }

  function clearCompletedTodos() {
    const completedTodos = todos.filter(todo => !todo.completed);
    
    setTodos(completedTodos);
    updateLocalStorage(completedTodos);
  }

  const filterList = FILTER_NAMES.map(name => (
    <FilterButton
      key={name}
      name={name}
      isPressed={name === filter}
      setFilter={setFilter}
    />
  ));

  function updateLocalStorage(todoList) {
    localStorage.setItem('todos', JSON.stringify(todoList));
  }

  function handleOnDrop(result) {
    updateLocalStorage(todos);
  }

  return (
    <div className="wrapper">
      <Head>
        <title>Frontend Mentor | Todo app</title>
        <meta name="description" content="Todo app" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      </Head>

      <header className="header container">
        <div className="row">
          <h1 className="title">Todo</h1>

          <div>
            <ThemeButton />
          </div>
        </div>
      </header>

      <main className="main container">
        <div className="row">
          <TodoForm addTask={addTask} />

          <div className="todo-wrapper">
            <ReactSortable
              tag="ul"
              list={todos}
              setList={setTodos}
              onEnd={handleOnDrop}
              className="todo-list"
            >
              {todos.filter(FILTER_MAP[filter]).map((todo) => {
                return (
                  <Todo
                    todo={todo}
                    toggleCompletedTodo={toggleCompletedTodo}
                    removeTodo={removeTodo}
                    key={todo.id}
                  />
                );
              })}
            </ReactSortable>

            <div className="todo-controls">
              <div>
                {uncompletedTodos.length} {itemsNoun} left
              </div>

              <div className="todo-filters">
                {filterList}
              </div>

              <div>
                <button onClick={clearCompletedTodos}>Clear Completed</button>
              </div>
            </div>

            <div className="todo-filters">
              {filterList}
            </div>
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
