import {combineReducers} from 'redux';

import categoryReducer from '../components/category/catReducer.js';
import authReducer from '../components/auth/reducer.js';
import profileReducer from '../components/profile/profileReducer.js';


export default combineReducers({
  categories: categoryReducer,
  profile: profileReducer,
  auth: authReducer,
});
