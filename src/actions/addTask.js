import { CREATE_TASK } from "./Types"

export const addTask = (dispatch,payload)=>{
    dispatch({
        type:CREATE_TASK,
        payload
    })
}