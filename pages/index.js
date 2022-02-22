import Head from 'next/head'
import Image from 'next/image'

export default function Home() {
  const todos = [
    {title: 'Complete online JavaScript course'},
    {title: 'Jog around the park 3x'},
    {title: '10 minutes meditation'},
    {title: 'Read for 1 hour'},
    {title: 'Pick up groceries'},
    {title: 'Complete Todo App on Frontend Mentor'},
  ]

  return (
    <div>
      <Head>
        <title>Frontend Mentor | Todo app</title>
        <meta name="description" content="Todo app" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      </Head>

      <header className="header container">
        <h1 className="title">Todo</h1>

        <div>
          <button className="btn-theme">
            <img src="icon-sun.svg" alt="" />
          </button>
        </div>
      </header>

      <main className="main container">
        <form className="todo-form">
          <label htmlFor="todo" className="sr-only">Create a new todo</label>
          <input type="text" name="todo" id="todo" placeholder="Create a new todo..." className="todo-input" />
        </form>

        <ul className="todo-list">
          {todos.map((todo, i) => {
            return (
              <li className="todo-item">
                <button class="todo-btn">{todo.title}</button>
                <button className="todo-delete">
                  <span className="sr-only">Delete {todo.title}</span>
                  <img src="/icon-cross.svg" alt="" />
                </button>
              </li>
            );
          })}
        </ul>

        <div>
          <div>
            <p>{/*Add dynamic number*/}5 items left</p>
          </div>

          <div>
            <button>All</button>
            <button>Active</button>
            <button>Completed</button>
          </div>

          <div>
            <button>Clear Completed</button>
          </div>
        </div>

        <p>Drag and drop to reorder list</p>
      </main>

      <footer>
        Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank" rel="noopener noreferrer">Frontend Mentor</a>. Coded by <a href="https://twitter.com/bwalkermills" target="_blank" rel="noopener noreferrer">Byron</a>.
      </footer>
    </div>
  )
}
