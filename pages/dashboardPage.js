class DashboardPage {
    get welcomeMessage() {
      return $('~welcome-message');
    }
  
    async isWelcomeMessageVisible() {
      return this.welcomeMessage.isDisplayed();
    }
  }
  
  module.exports = new DashboardPage();
  