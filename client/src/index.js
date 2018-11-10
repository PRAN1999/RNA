/*global chrome*/

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

if(!chrome.storage) {
    let items = {
        reddit_data: {
            
        }
    }

    ReactDOM.render(<App />, 
        document.getElementById('root'));
    registerServiceWorker();
} else {
    chrome.storage.sync.get(['reddit_data'], function(items) {
        console.log(items)
        ReactDOM.render(<App reddit-data={items['reddit_data']}/>, 
            document.getElementById('root'));
        registerServiceWorker();
    });
}
