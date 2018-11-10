import { UPDATE_ARTICLES } from "../actions/actions";

export function articlesReducer(state = [], action) {
    switch(action.type) {
        case UPDATE_ARTICLES:
            console.log(action);
            return action.payload.data;
        default:
            return state;
    }
}