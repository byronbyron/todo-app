import Image from 'next/image'

export default function Todo({ todo, removeTodo, toggleCompletedTodo }) {
  return (
    <li className="todo-item">
      <input type="checkbox" name={`todo-${todo.id}`} id={`todo-${todo.id}`} className="todo-check sr-only" defaultChecked={todo.completed} onChange={() => toggleCompletedTodo(todo.id)} />
      <label htmlFor={`todo-${todo.id}`} className="todo-label">
        <span className="todo-check-circle"></span>
        {todo.title}
      </label>
      <button className="todo-delete" onClick={() => removeTodo(todo.id)}>
        <span className="sr-only">Delete {todo.title}</span>
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18"><path fill="#494C6B" fillRule="evenodd" d="M16.97 0l.708.707L9.546 8.84l8.132 8.132-.707.707-8.132-8.132-8.132 8.132L0 16.97l8.132-8.132L0 .707.707 0 8.84 8.132 16.971 0z"/></svg>
      </button>
    </li>
  )
}
