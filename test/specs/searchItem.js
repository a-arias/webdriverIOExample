const LandingPage = require('../pageobjects/landing.page');
const SearchResultsPage = require('../pageobjects/searchResults.page');
const InformationPage = require('../pageobjects/InformationPageForProduct.page');
const CheckoutPage = require('../pageobjects/checkout.page');

describe('Search item functionality',  () =>{
    it('should be able to search a product and then buy it', () =>{
      //Opening the landing page.
      LandingPage.open();
      //Performing search of the product: Faded Short Sleeve T-shirts.
      LandingPage.SearchProduct('Faded Short Sleeve T-shirts');

      //Clicks the results page item with a given name.
      SearchResultsPage.clickItemFromList('Faded Short Sleeve T-shirts');
            
      //Clicks add to car button from the information item page.
      InformationPage.clickAddToCarButton();
      //Clicks Proceed To Checkout button from the information item page.
      InformationPage.clickProceedToCheckout();

      //Perfom the complete process to buy the given item.
      CheckoutPage.completeBuyOut();

      //Obtaining the success message element and then Asserting the text is the correct, to make sure we completed the order.
      const successMessageElem = $('p.alert-success');
      expect(successMessageElem).toHaveText('Your order on My Store is complete.');

      //Asserting browser title has the order confimation text.
      expect(browser).toHaveTitle('Order confirmation - My Store')
    });

    it('should be able add a product from category section and buy it', () =>{
      //Opening the landing page.
      LandingPage.open();

      //Clicks and item from the category section with a given name
      SearchResultsPage.clickItemFromList('Faded Short Sleeve T-shirts');
      
      //Then we click the add to car button from the information page of the item we clicked on the previous step.
      InformationPage.clickAddToCarButton();

      //Clicks Proceed To Checkout button from the information item page.
      InformationPage.clickProceedToCheckout();
            
      //Then we click the proceed to checkout button from the information page of the item
      CheckoutPage.completeBuyOut();

      //Obtaining the success message element and then Asserting the text is the correct, to make sure we completed the order.
      const successMessageElem = $('p.alert-success');
      expect(successMessageElem).toHaveText('Your order on My Store is complete.');

      //Asserting browser title has the order confimation text.
      expect(browser).toHaveTitle('Order confirmation - My Store')
    });

    it('should be able to search a product with a given item name and Products not containing the keyword should not display on results.', () =>{
      //const names = ['Blouse','Printed Dress','Printed Summer Dress','Printed Chiffon Dress'];
      var obj = {a: 'Printed Dress',b: 'Printed Summer Dress', c: 'Printed Chiffon Dress'};

      //This is the keyword we are going to search
      const ItemToSearch = 'Blouse';

      //Opening the landing page.
      LandingPage.open();
      //Performing search of the product: Faded Short Sleeve T-shirts.
      LandingPage.SearchProduct(ItemToSearch);

      //Obtaining the results list
      const result = $("h5[itemprop='name']").$(`a[title='${ItemToSearch}']`);
      
      //Asserts the element searched text is the same as te results one text
      expect(result).toHaveText(ItemToSearch);

      //Looping to the list of products names and  Assert these are not present on the page
      for (const prop in obj) {
        const result = $("h5[itemprop='name']").$(`a[title='${obj[prop]}']`);

        expect(result).not.toExist();
      }
    });
});
