const Page = require('./page');
class LoginPage extends Page {
    /**
     * define selectors using getter methods
     */
    get emailInput () { return $('#email') }
    get passwordInput () { return $('#passwd') }
    get loginButton () { return $("#SubmitLogin") }

    /**
    * This method is going to perform a log in with given credentials or default ones if not provided.
    * @param  {String} email
    * @param  {String} password
    */
    loginAsNormalUser (email = 'arias.abram+1@gmail.com',password = 'nasadina') {
        //wait for email input to be displayed on the page.
        this.emailInput.waitForDisplayed();

        //fill email input with given parameter or default.
        this.emailInput.setValue(email);

        //fill password input with given parameter or default.
        this.passwordInput.setValue(password);

        //click login button.
        this.loginButton.click();
    }

    /**
     * Opens up the login page.
     */
    open () {
        return super.open('/index.php?controller=authentication&back=my-account');
    }
}

module.exports = new LoginPage();
