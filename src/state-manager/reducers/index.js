import { combineReducers } from 'redux';

import calendarReducer from './calendarReducer';
import uiReducer from './uiReducer';




const rootReducer = combineReducers({
  ui: uiReducer,   // Reducer's state represented as "ui".
  calendar: calendarReducer,
  // TODO: auth Reducer
});




export default rootReducer;


