import axios from 'axios';
import { setAlert} from './alert';

import { 
  GET_PROFILE,
  PROFILE_ERROR,
  UPDATE_PROFILE
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

// Create or Update Profile

export const createProfile = (formData, history, edit = false) => 
  async dispatch => {
    try {
      const config = {
        headers: {
          'Content-Type': 'application/json'
        }
      };
      const res = await axios.post('/api/profile', formData, config);

      dispatch({
        type: GET_PROFILE,
        payload: res.data
      });
      dispatch(setAlert(edit ? 'Profile updated' : 'Profile Created','success'));

      if(!edit) {
        history.push('/dashboard');
      }
    } catch (error) {
      dispatch({
        type: PROFILE_ERROR,
        payload: {
          msg: error.response.statusText,
          status: error.response.status
        }
      });

      const errors = error.response.data.errors;

      if (errors) {
        errors.forEach(err => dispatch(setAlert(err.msg, 'danger')));
      };
    };
};

// Add Experience

export const addExperience = (formData, history) => async dispatch => {
  try {
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    };
    const res = await axios.put('/api/profile/experience', formData, config);

    dispatch({
      type: UPDATE_PROFILE,
      payload: res.data
    });
    dispatch(setAlert('Experience added', 'success'));

    history.push('/dashboard');
  } catch (error) {
    const errors = error.response.data.errors;

    if (errors) {
      errors.forEach(err => dispatch(setAlert(err.msg, 'danger')));
    };

    dispatch({
      type: PROFILE_ERROR,
      payload: {
        msg: error.response.statusText,
        status: error.response.status
      }
    });

  };
};

// Add Education

export const addEducation = (formData, history) => async dispatch => {
  try {
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    };
    const res = await axios.put('/api/profile/education', formData, config);

    dispatch({
      type: UPDATE_PROFILE,
      payload: res.data
    });
    dispatch(setAlert('Education added', 'success'));

    history.push('/dashboard');
  } catch (error) {
    const errors = error.response.data.errors;

    if (errors) {
      errors.forEach(err => dispatch(setAlert(err.msg, 'danger')));
    };

    dispatch({
      type: PROFILE_ERROR,
      payload: {
        msg: error.response.statusText,
        status: error.response.status
      }
    });

  };
};