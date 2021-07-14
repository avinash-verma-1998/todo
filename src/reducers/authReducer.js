import { SIGN_IN } from "../actions/Types";

const authReducer = (state = {}, action) => {
    switch (action.type) {
      case SIGN_IN:
        return {
          user:action.payload
        };
      default:
        return state;
    }
  };
  
  export default authReducer