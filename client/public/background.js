let popupWindowManager = new PopupWindowManager();
let pageSourceScraper = new PageSourceScraper();

chrome.tabs.onUpdated.addListener(function(activeInfo) {
    pageSourceScraper.requestSource();
});

function sendCollectedData(payload) {
    if(!payload || !payload.reddit_data)
        return;
    
    popupWindowManager.updatePopupWindow(payload, {
        articles: [
            {
                title: 'Google',
                description: 'A very good search engine',
                url: 'https://www.google.com/'
            },
            {
                title: 'Facebook',
                description: 'An ok social media network',
                url: 'https://www.facebook.com/'
            },
            {
                title: 'YouTube',
                description: 'A great way to waste time',
                url: 'https://www.youtube.com/'
            }
        ],
        keywords: [
            'Google',
            'Search Engine',
            'Advertisement',
            'Social Media'
        ]
    });

    console.log('sending to server');
    $.ajax({
        type: 'POST',
        url: '',
        contentType: 'application/json; charset=utf-8',
        dataType: 'json',
        // The Django server expects JSON payloads as a String then parses it using json.loads(payload)
        data: JSON.stringify(payload),
        success: function(response) {
            console.log(response);
            popupWindowManager.updatePopupWindow(payload, response);
        },
        failure: function(response) {
            console.log(response);
        }
    })
}

chrome.runtime.onMessage.addListener(function(request, sender) {
    if (request.action == "get_source") {
        if(chrome.runtime.lastError || request.error) {
            console.log(request.error);
        } else {
            console.log('got source');
            sendCollectedData(request.data);
        }
    }
});