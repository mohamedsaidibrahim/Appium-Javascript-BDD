class LoginPage {
    get usernameField() {
      return $('~username');
    }
  
    get passwordField() {
      return $('~password');
    }
  
    get loginButton() {
      return $('~login-button');
    }
  
    async enterUsername(username) {
      await this.usernameField.setValue(username);
    }
  
    async enterPassword(password) {
      await this.passwordField.setValue(password);
    }
  
    async clickLogin() {
      await this.loginButton.click();
    }
  }
  
  module.exports = new LoginPage();
  