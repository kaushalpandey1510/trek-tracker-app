import createDataContext from './createDataContext';
import trackerApi from './../api/trackers';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { navigate } from '../navigationRef';

const authReducer = (state, action) => {
  switch (action.type) {
    case 'add_error':
      return { ...state, errorMessage: action.payload };
    case 'signin':
      return { errorMessage: '', token: action.payload };
    case 'clear_error_message':
      return { ...state, errorMessage: '' };
    default:
      return state;
  }
};

//Already logged in user
const tryLocalSignin = (dispatch) => async () => {
  const token = await AsyncStorage.getItem('token');

  if (token) {
    dispatch({ type: 'signin', payload: token });
    navigate('TrackList');
  } else {
    navigate('loginFlow');
  }
};

//clear error message state
const clearErrorMessage = (dispatch) => () => {
  dispatch({ type: 'clear_error_message' });
};

//User Sign up
const signup =
  (dispatch) =>
  async ({ email, password }) => {
    try {
      const response = await trackerApi.post('/signup', { email, password });
      await AsyncStorage.setItem('token', response.data.token);
      dispatch({ type: 'signin', payload: response.data.token });

      navigate('TrackList');
    } catch (err) {
      dispatch({ type: 'add_error', payload: 'Email already exist!' });
    }
  };

//User Sign in
const signin =
  (dispatch) =>
  async ({ email, password }) => {
    try {
      const response = await trackerApi.post('/signin', { email, password });
      await AsyncStorage.setItem('token', response.data.token);
      dispatch({ type: 'signin', payload: response.data.token });

      navigate('TrackList');
    } catch (err) {
      dispatch({
        type: 'add_error',
        payload: 'Something went wrong in Sign In. Try again...',
      });
    }
  };

const signout = (dispatch) => {
  return () => {};
};

export const { Provider, Context } = createDataContext(
  authReducer,
  { signup, signin, signout, clearErrorMessage, tryLocalSignin },
  { token: null, errorMessage: '' }
);
