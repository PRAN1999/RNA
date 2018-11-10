function initializeParser(href) {
    if(href.includes('reddit')) {
        return new RedditParser();
    } else {
        return new Parser();
    }
}

let hostname = location.hostname;
let site_href = location.href;
let source = hostname.substr(hostname.lastIndexOf(".") + 1);

// Initialize the page parses based on the respective page
// and collect the data that is common for all pages.
var parser = initializeParser(site_href);
var data = {
    //full: parser.DOMToString(),
    href: site_href,
    domain: hostname,
    source: source,
    time: Date.now()
};

try {

    if(site_href.includes('reddit')) {
        data.reddit_data = parser.getParsedRedditPage();
    }

    chrome.runtime.sendMessage({
        action: "get_source",
        data: data
    });

} catch(error) {
    chrome.runtime.sendMessage({
        action: "get_source",
        'error': error.message
    });

    chrome.runtime.sendMessage({
        action: "get_source",
        data: data
    });
}