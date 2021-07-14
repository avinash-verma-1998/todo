import { CREATE_TASK } from "../actions/Types";


const initialState=[
  {
    id:`${Date.now()} + ${Math.random()}`,
    title:"1",
    task:"Dummy",
    dateTime:new Date(2021,10,12)

  },{
    id:`${Date.now()} + ${Math.random()}`,
    title:"1",
    task:"Dummy",
    dateTime:new Date(2021,7,15)

  },{
    id:`${Date.now()} + ${Math.random()}`,
    title:"1",
    task:"Dummy",
    dateTime:new Date(2021,7,14)

  },{
    id:`${Date.now()} + ${Math.random()}`,
    title:"12",
    task:"Dummy",
    dateTime:new Date(2021,27,14)

  }
]

const taskReducer = (state = initialState, action) => {
    switch (action.type) {
      case CREATE_TASK:
        return ([...state,action.payload]);
          
      default:
        return state;
    }
  };
  
  export default taskReducer