/*global chrome*/

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import registerServiceWorker from './registerServiceWorker';
import App from './components/App/App';
import store from './configureStore';
import './index.css';

chrome.storage.local.get(['collected', 'response'], function(items) {
    console.log(items['response']);
    ReactDOM.render(
        <Provider store={store} >
            <App redditData={items['response']}/>
        </Provider>, 
        document.getElementById('root'));
    registerServiceWorker();
});
