import { combineReducers } from 'redux';
import { articlesReducer } from './articlesReducers';
import { visibilityReducer } from './visibilityReducer';

const rootReducer = combineReducers({
  state: (state = {}) => state,
  articles: articlesReducer,
  visibility: visibilityReducer
});

export default rootReducer;