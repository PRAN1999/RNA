class PopupWindowManager {

    constructor(width = 400, height = 800) {
        this.windowId = null;
        this.popupTabId = 0;

        this.windowWidth = width;
        this.windowHeight = height;
    }

    updatePopupWindow(collected_data, response) {
        console.log('updating window')
        chrome.storage.local.set(
            { 'collected': collected_data, 'response': response }, 
            function() {
                let appInjector = new PageSourceScraper([
                    'dist/main.js',
                    'dist/main.css'
                ]);
                appInjector.requestSource();
            }
        );
    };
}