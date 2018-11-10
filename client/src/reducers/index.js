import { combineReducers } from 'redux';
import { articlesReducer } from './articlesReducers';
import { visibilityReducer } from './visibilityReducer';
import { activeArticleReducer } from './activeArticleReducer';

const rootReducer = combineReducers({
  state: (state = {}) => state,
  articles: articlesReducer,
  activeArticle: activeArticleReducer,
  visibility: visibilityReducer
});

export default rootReducer;