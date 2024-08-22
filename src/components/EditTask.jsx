import React, { useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { editTasks } from './redux/action/Action';

export default function EditTask() {
  const [Id , setId] = useState()
  const [description , setDescription] = useState()
  const [existe , setExiste] = useState(false)
  const refchecked = useRef() ; 
  const todo =useSelector(state=>state.todo )
  const dispatch =  useDispatch()
const verifierId = ()=>{
  const existTaskVerifier = todo.find(res=>res.id== Id)
  if(existTaskVerifier) {setExiste(true)} ; 
  
}
const handleEdit =(e)=>{
  e.preventDefault();
  const refcheckedFormEdit = refchecked.current.checked
  dispatch(editTasks(Id,description,refcheckedFormEdit ))
}
  return (
    <div>
      <div className="verifierEdit">
          <label htmlFor="id"> id : </label>
          <input type="number"  placeholder="Id" onChange={(e)=>setId(e.target.value)}/> 
          <button onClick={verifierId}>verifier</button>
      </div>

        {existe ? <form  className="verifierEdit"  onSubmit={handleEdit}>
            <label htmlFor="description">description</label>
            <input type="text"  placeholder="Description"  onChange={(e)=>setDescription(e.target.value)}/>
            <input type="checkbox" ref={refchecked} />
            <button>send form to verifier </button>
        </form> : <p> task don't exist </p>}
       
    </div>
  )
}
