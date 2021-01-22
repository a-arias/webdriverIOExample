const Page = require('./page');
const LoginPage = require('./login.page');

class CheckoutPage extends Page {
    /**
     * define selectors using getter methods
     */
    get summaryCheckoutButton () { return $("div[id='center_column']").$("a[title='Proceed to checkout']")}
    get addressCheckoutButton () { return $("div[id='center_column']").$("button[name='processAddress']")}
    get termnsAndConditionsButton () { return $("#uniform-cgv")}
    get shippingCheckoutButton () { return $("div[id='center_column']").$("button[name='processCarrier']")}
    get payByCheckButton () { return $("a[title='Pay by check.']") }
    get confirmOrderButton () { return $("div[id='center_column']").$("button[type='submit']") }

    /**
    * This function deletes an item from the cart sumary page using the index of the element list.
    * @param {String} elementIndex example: 1
    */
    deleteItemFromCartSummary(elementIndex){
      $$("a[title='Delete']")[elementIndex].click();
    }

    /*
    * This function execute the complete process to buy a product from the cart sumary
    */
    completeBuyOut(){
      this.summaryCheckoutButton.waitForDisplayed();
      this.summaryCheckoutButton.click();

      LoginPage.loginAsNormalUser();
      
      this.addressCheckoutButton.waitForDisplayed();
      this.addressCheckoutButton.click();

      this.termnsAndConditionsButton.waitForDisplayed();
      this.termnsAndConditionsButton.click();

      this.shippingCheckoutButton.click();

      this.payByCheckButton.click();

      this.confirmOrderButton.click();
    }

    /*
    * This function opens the cart summary page
    */
    open () {
      return super.open('/index.php?controller=order');
  }
}

module.exports = new CheckoutPage();