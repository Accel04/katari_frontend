import { combineReducers } from 'redux';
import companyReducer from './companyReducer';
import userReducer from './userReducer';

const rootReducer = combineReducers({
  company: companyReducer,
  user: userReducer,
});

export default rootReducer;
