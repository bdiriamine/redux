import { add, editTask, filter } from "../const/const";

const initialState={todo:[
    { description: "hello", id:1,checkTask:true},
    { description: "hi",id:2,checkTask:false},
    { description: "welcome",id:3,checkTask:false},
]}
export  const todoReducer =  (state=initialState , action )=>{
    switch (action.type) {
        case add: return {...state , todo : [...state.todo,action.payload]};
        case filter: return {...state,todo : [...state.todo.filter(res => res.checkTask ==action.payload)] } ;
        case editTask :  return {...state,todo : [...state.todo.map(res => res.id == action.payload.id ?  action.payload  : res)]}
        default : return state;
    }

}

export default todoReducer;
