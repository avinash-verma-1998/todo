import { CREATE_TASK } from "../actions/Types";

const taskReducer = (state = [], action) => {
    switch (action.type) {
      case CREATE_TASK:
        return ([...state,action.payload]);
          
      default:
        return state;
    }
  };
  
  export default taskReducer