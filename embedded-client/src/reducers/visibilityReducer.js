import { UPDATE_VIEW_STATE, ViewState } from "../actions/actions";

export function visibilityReducer(state = ViewState.SHOW_LINKS, action) {
    switch(action.type) {
        case UPDATE_VIEW_STATE:
            return action.viewState;
        default:
            return state;
    }
}