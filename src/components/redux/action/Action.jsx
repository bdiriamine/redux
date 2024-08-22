import { add, filter, editTask } from "../const/const"

export const addTask =(data)=>{
  console.log(data)
  return {type : add , payload : data}
}
export const filterTask =(valInput)=>{

  return {type : filter , payload : valInput}
}
export const editTasks =(id,description,checkTask)=>{
  return {type : editTask , payload : {id,description,checkTask}}
}