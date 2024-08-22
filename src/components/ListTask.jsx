import React from 'react'
import { useSelector } from 'react-redux';
import Task from './Task'

const Tasklist = () => {
  const todo =useSelector(state=>state.todo )
  
  console.log(todo)
  return (
    <div>
        <div className="row mx-1 px-5 pb-3 w-80">
          <div className="col mx-auto">
          {todo.map((data,index)=> <Task key={index} data={data} />)}
         
            
          </div>
        </div>
       
    </div>
  )
}

export default Tasklist