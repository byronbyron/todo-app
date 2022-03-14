import Image from 'next/image'

export default function Todo({todo}) {
  return (
    <li className="todo-item" key={todo.id}>
      <input type="checkbox" name={`todo-${todo.id}`} id={`todo-${todo.id}`} className="todo-check sr-only" defaultChecked={todo.completed} />
      <label htmlFor={`todo-${todo.id}`} className="todo-label">
        {todo.title}
      </label>
      <button className="todo-delete">
        <span className="sr-only">Delete {todo.title}</span>
        <Image src="/icon-cross.svg" alt="" width={12} height={12} />
      </button>
    </li>
  )
}
