import { UPDATE_ARTICLES } from "../actions/actions";

export function articlesReducer(state = [], action) {
    console.log("Articles", action);
    switch(action.type) {
        case UPDATE_ARTICLES:
            return action.payload.data || state;
        default:
            return state;
    }
}