const Page = require('./page');

class InformationPage extends Page {
    /**
     * define selectors using getter methods
     */
    get socialButtons () { return $('p.socialsharing_product') }
    get addToCartButton () { return $('p#add_to_cart') }
    get proceedToCheckoutButton () { return $("a[title='Proceed to checkout']") }
    get continueShoppingButton () { return $("span[title='Continue shopping']") }

    /**
    * This method is going to wait and then click the proceed to checkout button.
    */
    clickProceedToCheckout(){
      this.proceedToCheckoutButton.waitForDisplayed({ timeout: 5000 });
      this.proceedToCheckoutButton.click();
    }

    /**
    * This method is going to wait and then click the addToCartButton button.
    */
    clickAddToCarButton(){
      this.addToCartButton.waitForDisplayed({ timeout: 5000 });
      this.addToCartButton.click();
    }

    /**
    * This method is going to wait and then click the continueShoppingButton button.
    */
    clickContinueShoppingButton(){
      this.continueShoppingButton.waitForDisplayed({ timeout: 5000 });
      this.continueShoppingButton.click();
    }
}

module.exports = new InformationPage();