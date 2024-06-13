import {
    FETCH_USERS_REQUEST,
    FETCH_USERS_SUCCESS,
    FETCH_USERS_FAILURE,
    REGISTER_USER_REQUEST,
    REGISTER_USER_SUCCESS,
    REGISTER_USER_FAILURE,
  } from '../actions/userActions';
  
  const initialState = {
    users: [],
    loading: false,
    error: null,
  };
  
  const userReducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_USERS_REQUEST:
      case REGISTER_USER_REQUEST:
        return {
          ...state,
          loading: true,
          error: null,
        };
      case FETCH_USERS_SUCCESS:
        return {
          ...state,
          users: action.payload,
          loading: false,
          error: null,
        };
      case FETCH_USERS_FAILURE:
      case REGISTER_USER_FAILURE:
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
      case REGISTER_USER_SUCCESS:
        return {
          ...state,
          loading: false,
          error: null,
          users: [...state.users, action.payload],
        };
      default:
        return state;
    }
  };
  
  export default userReducer;
  