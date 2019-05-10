import { combineReducers } from 'redux';

import { changeColor } from './colorReducer';

const rootReducer = combineReducers({
  changeColor
});

export default rootReducer;