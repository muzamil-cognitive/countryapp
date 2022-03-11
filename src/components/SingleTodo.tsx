import React from 'react'
import { Todo } from './model'

type Props ={
    todo:Todo;
    todos:Todo[];
    setTodos:React.Dispatch<React.SetStateAction<Todo[]>>
}
const SingleTodo:React.FC<Props> = ({todo,todos,setTodos}) => {
  return (
    <form className='todos_single'>
        <span className='single_todos_text'>{todo.todo}</span>
        <div>
            <span className='icon'></span>
            <span className='icon'></span>
            <span className='icon'></span>
        </div>
    </form>
  )
}

export default SingleTodo