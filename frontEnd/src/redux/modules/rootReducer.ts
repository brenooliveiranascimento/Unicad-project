import { combineReducers } from 'redux';
import deliverys from './delivery/delivery';

const rootReducer = combineReducers({
  deliverys,
});

export default rootReducer;
