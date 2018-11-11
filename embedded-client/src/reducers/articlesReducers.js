import { UPDATE_ARTICLES } from "../actions/actions";

export function articlesReducer(state = [], action) {
    switch(action.type) {
        case UPDATE_ARTICLES:
            return action.payload.data.articles;
        default:
            return state;
    }
}