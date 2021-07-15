import {INITAIALIZE_STATE,DELETE_TASK, CREATE_TASK, SET_CURRENT_TASK, UPDATE_TASK } from "../actions/Types";


const initialState={
  task_list :[],
  current:null
}
  

const taskReducer = (state = initialState, action) => {
    switch (action.type) {
      case INITAIALIZE_STATE:
      return({
        ...state,task_list: [...state.task_list,...action.payload]
      })
      case CREATE_TASK:
        return ({
          ...state,task_list:[...state.task_list,action.payload]
        });
        case SET_CURRENT_TASK:
        return({
          ...state,current:action.payload
        })
        case UPDATE_TASK:
        const updateIndex = state.task_list.findIndex(item => item.id === action.payload.id )
        if(updateIndex === -1){
          return {...state,current:null}
        }else
        return({
          ...state,current:null,task_list:[...state.task_list.slice(0,updateIndex),action.payload,...state.task_list.slice(updateIndex+1,state.task_list.length)]
        })
        case DELETE_TASK:
        const deleteIndex = state.task_list.findIndex(item => item.id === action.payload.id )
        if(deleteIndex === -1){
          return {task_list:[...state.task_list],current:null}
        }else
        return({
          ...state,current:null,task_list:[...state.task_list.slice(0,deleteIndex),...state.task_list.slice(deleteIndex+1,state.task_list.length)]
        })

      default:
        return state;
    }
  };
  
  export default taskReducer