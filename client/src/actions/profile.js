import axios from 'axios';
import { setAlert} from './alert';

import { 
  GET_PROFILE,
  PROFILE_ERROR
} from './types';

// Get current users profile

export const getCurrentProfile = () => async dispatch => {
  console.log("akcja")
  try {
    const res = await axios.get('/api/profile/me');
    console.log("mam res", res)
    dispatch({
      type: GET_PROFILE,
      payload: res.data
    })
  } catch (error) {
    console.log("problem", error)
    dispatch({
      type: PROFILE_ERROR,
      payload: { 
        msg: error.response.statusText,
        status: error.response.status
      }
    });
  };
};