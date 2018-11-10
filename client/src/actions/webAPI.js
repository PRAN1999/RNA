import axios from "axios";
import { UPDATE_ARTICLES } from "./actions";

const BASE_URL = 'https://localhost:5000/service/relevant-articles';

/*
 * Action creators
 */
export function updateArticles(keywords) {
    const kwds = keywords.join('&kwd=');
    const url = `${BASE_URL}?kwd=${kwds}`;
    return { 
        type: UPDATE_ARTICLES, 
        payload: axios.get(url) 
    };
}
