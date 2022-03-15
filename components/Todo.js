import Image from 'next/image'

export default function Todo({ todo, removeTodo, toggleCompletedTodo }) {
  return (
    <li className="todo-item">
      <input type="checkbox" name={`todo-${todo.id}`} id={`todo-${todo.id}`} className="todo-check sr-only" defaultChecked={todo.completed} onChange={() => toggleCompletedTodo(todo.id)} />
      <label htmlFor={`todo-${todo.id}`} className="todo-label">
        {todo.title}
      </label>
      <button className="todo-delete" onClick={() => removeTodo(todo.id)}>
        <span className="sr-only">Delete {todo.title}</span>
        <Image src="/icon-cross.svg" alt="" width={12} height={12} />
      </button>
    </li>
  )
}
