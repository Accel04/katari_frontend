import {
    FETCH_COMPANIES_REQUEST,
    FETCH_COMPANIES_SUCCESS,
    FETCH_COMPANIES_FAILURE,
  } from '../actions/companyActions';
  
  const initialState = {
    companies: [],
    loading: false,
    error: null,
  };
  
  const companyReducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_COMPANIES_REQUEST:
        return {
          ...state,
          loading: true,
          error: null,
        };
      case FETCH_COMPANIES_SUCCESS:
        return {
          ...state,
          companies: action.payload,
          loading: false,
          error: null,
        };
      case FETCH_COMPANIES_FAILURE:
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default companyReducer;
  