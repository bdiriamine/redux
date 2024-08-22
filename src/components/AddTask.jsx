import React, { useRef, useState } from 'react'
import { useDispatch } from 'react-redux';
import { addTask } from './redux/action/Action';

export default function AddTask() {
   const [id , setId] = useState();
   const [description , setDescription] = useState('');
   const CheckTask = useRef()
   const dispatch = useDispatch()


   const handlleSubmit = (e)=>{
    e.preventDefault();
    const acceptConditionsValue = CheckTask.current.checked
     dispatch(addTask({id:id , description:description , checkTask:acceptConditionsValue}))
   }

   
  return (
    <div >
        <p className="p-task"> <strong> Add task : </strong></p>
        <form  onSubmit={handlleSubmit} className="border-task" >
          <div className="form-task"> 
              <label htmlFor="id"> <strong> id : </strong> </label>
              <input type="text" placeholder="id"  id="id" onChange={(e)=>{setId(e.target.value) }} />
          </div>
          <div  className="form-task">
            <label htmlFor="description"> <strong> description  : </strong> </label>
            <input type="text-area" min={1} max={300} placeholder="description"  id="id"  onChange={(e)=>{setDescription(e.target.value) }} />
          </div>
          <div  className="form-task">
            <input type="checkbox" id="checkTask" ref={CheckTask} />
            <button type="submit"  >  send task</button>
          </div>

        </form>
    </div>
  )
}
