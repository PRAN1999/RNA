import { UPDATE_ARTICLES, UPDATE_ACTIVE_ARTICLE } from "../actions/actions";

export function activeArticleReducer(state = [], action) {
    console.log(action);
    switch(action.type) {
        case UPDATE_ARTICLES:
            return 0;
        case UPDATE_ACTIVE_ARTICLE:
            return action.index;
        default:
            return state;
    }
}