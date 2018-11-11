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
    injectApp(items);
});

function injectApp(items) {
    const newDiv = document.createElement("div");
    newDiv.setAttribute("id", "chromeExtensionReactApp");
    document.body.appendChild(newDiv);
    
    ReactDOM.render(
        <Provider store={store} >
            <App redditData={items['response']}/>
        </Provider>, 
        newDiv);
    registerServiceWorker();
}