import { combineReducers } from 'redux';

import { color } from './ColorReducer';

const rootReducer = combineReducers({
  color
});

export default rootReducer;