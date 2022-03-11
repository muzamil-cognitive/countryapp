import React,{useRef} from 'react'
import './styles.css'
interface Props{
  todo:string,
  setTodo:React.Dispatch<React.SetStateAction<string>>;
  handleAdd:(e:React.FormEvent)=>void
}
const InputFeild:React.FC<Props> = ({todo,setTodo,handleAdd}) => {
  const inputRef =useRef<HTMLInputElement>(null)
  return (
<form onSubmit={(e)=>{handleAdd(e);
inputRef.current?.blur()
}} className='input'>
    <input ref={inputRef} onChange={(e)=>setTodo(e.target.value)} value={todo} type='input' placeholder='Enter a task' className='input_box'></input>
    <button className='input_submit' type='submit'>Go</button>
</form>
  )
}

export default InputFeild