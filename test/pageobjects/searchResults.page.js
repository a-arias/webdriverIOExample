const Page = require('./page');

class SearchResultsPage extends Page {

    /**
     * This method is going to click an item on the results page using given item title
     * @param  {String} itemTitle example: Faded Short Sleeve T-shirts
     */
    clickItemFromList (itemTitle) {
      return $("h5[itemprop='name']").$(`a[title='${itemTitle}']`).click();
    }

}

module.exports = new SearchResultsPage();