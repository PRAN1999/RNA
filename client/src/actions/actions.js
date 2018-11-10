import { updateArticles } from './webAPI';

/*
 * Action types 
 */
export const UPDATE_ARTICLES = 'update_articles';
export const UPDATE_ACTIVE_ARTICLE = 'update_active_article';
export const UPDATE_VIEW_STATE = 'update_view_state';

/*
 * Other constants 
 */
export const ViewState = {
    SHOW_LINKS: 'show_links',
    SHOW_ARTICLE: 'show_article'
}

/*
 * Actions 
 */
export function filterByKeywords(keywords) {
    return updateArticles(keywords);
}

export function updateViewState(viewState) {
    return {
        type: UPDATE_VIEW_STATE,
        viewState
    }
}