import {SIGN_IN} from './Types';
export const signInAction = (dispatch, payload) => {
  console.log("here")
  dispatch({
    type: SIGN_IN,
    payload: payload,
  });
};
