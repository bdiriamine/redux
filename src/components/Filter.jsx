import React from 'react'
import { useDispatch } from 'react-redux'
import { filterTask } from './redux/action/Action'

export default function Filter() {
    const dispatch = useDispatch()
  return (
    <div>
       <form >
        <label htmlFor="search"> search</label>
        <input type="checkbox" onChange={(e)=>dispatch(filterTask(e.target.checked))} />
       </form>
    </div>
  )
}
