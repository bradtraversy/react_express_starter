import {combineReducers} from 'redux';
import customerReducer from './customer';

export default combineReducers({
  customers: customerReducer
})
