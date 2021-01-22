/**
* main page object containing all methods, selectors and functionality
* that is shared across all page objects
*/
module.exports = class Page {
    /**
    * Opens a sub page of the page
    * @param path path of the sub page (e.g. /path/to/page.html)
    */
    open (path) {
        return browser.url(`http://automationpractice.com​/${path}`)
    }

    /**
    * Switch to given Iframe ID
    * @param iframeName IframeID
    */
    switchToIframe (iframeName){
        browser.switchToFrame(iframeName)
    }

    /**
    * maximize the current window
    */
    maximizeWindow (){
        browser.maximizeWindow();        
    }

}
