const BASE_URL = 'http://localhost:5000/service/relevant-articles';
let popupWindowManager = new PopupWindowManager();
let pageSourceScraper = new PageSourceScraper();

chrome.tabs.onUpdated.addListener(function(activeInfo) {
    pageSourceScraper.requestSource();
});

function constructRequestUrl(reddit_data) {
    if(reddit_data.href)
        return `${BASE_URL}?url=${reddit_data.href}`;
    else
        return null;
}

function sendCollectedData(payload) {
    if(!payload || !payload.reddit_data) return;

    const requestUrl = encodeURI(constructRequestUrl(payload.reddit_data));
    if(!requestUrl) return;

    console.log(requestUrl);
    $.ajax({
        type: 'GET',
        url: requestUrl,
        contentType: 'application/json',
        dataType: 'json',
        // The Django server expects JSON payloads as a String then parses it using json.loads(payload)
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