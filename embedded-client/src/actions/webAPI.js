import axios from "axios";
import { UPDATE_ARTICLES } from "./actions";

const BASE_URL = 'http://localhost:5000/service/relevant-articles';

/*
 * Action creators
 */
export function updateArticles(keywords) {
    // If there are no keywords, return an empty
    // list of articles right away, no point in making API call
    if(!keywords || keywords.length === 0)
        return {
            type: UPDATE_ARTICLES,
            payload: { data: { articles: [] }}
        }
    
    const kwds = keywords.join('&kwd=');
    const url = encodeURI(`${BASE_URL}?kwd=${kwds}`);
    return { 
        type: UPDATE_ARTICLES, 
        payload: axios.get(url) 
    };
}
