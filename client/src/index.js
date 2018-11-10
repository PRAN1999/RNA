/*global chrome*/

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import registerServiceWorker from './registerServiceWorker';
import App from './components/App/App';
import store from './configureStore';
import './index.css';

if(!chrome.storage) {
    ReactDOM.render(
        <Provider store={store} >
            <App reddit-data={{}}/>
        </Provider>, 
        document.getElementById('root'));
    registerServiceWorker();
} else {
    chrome.storage.sync.get(['reddit_data'], function(items) {
        console.log(items)
        ReactDOM.render(
            <Provider store={store} >
                <App reddit-data={items['reddit_data']}/>
            </Provider>, 
            document.getElementById('root'));
        registerServiceWorker();
    });
}
