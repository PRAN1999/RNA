import { UPDATE_ARTICLES } from "../actions/actions";

export function articlesReducer(state = [], action) {
    switch(action.type) {
        case UPDATE_ARTICLES:
            console.log(action.payload.data.articles);
            return action.payload.data.articles;
        default:
            return state;
    }
}