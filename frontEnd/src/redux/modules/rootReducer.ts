import { combineReducers } from 'redux';
import deliveryReducer from './delivery/deliveryReducer';

const rootReducer = combineReducers({
  deliveryReducer
});

export default rootReducer;
