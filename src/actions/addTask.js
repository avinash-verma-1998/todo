import { INITAIALIZE_STATE,CREATE_TASK, SET_CURRENT_TASK,UPDATE_TASK ,DELETE_TASK} from "./Types"

export const addTask = (dispatch,payload)=>{
    dispatch({
        type:CREATE_TASK,
        payload
    })
}
export const setTask = (dispatch,payload)=>{
    dispatch({
        type:SET_CURRENT_TASK,
        payload
    })
}
export const   updateTaskAction= (dispatch, payload)=>{
    dispatch({
        type:UPDATE_TASK,
        payload
    })
}
export const   deleteTaskAction= (dispatch, payload)=>{
    dispatch({
        type:DELETE_TASK,
        payload
    })
}
export const putInitalState = (dispatch,payload)=>{
    dispatch({
        type:INITAIALIZE_STATE,
        payload
    })
}