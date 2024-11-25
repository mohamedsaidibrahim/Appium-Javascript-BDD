const { Given, When, Then } = require('@wdio/cucumber-framework');
const LoginPage = require('../../pages/loginPage');
const DashboardPage = require('../../pages/dashboardPage');
const { expect } = require('chai');

const TEST_DATA = {
  LOCKED: { username: 'alice@example.com', password: '10203040' },
  NO_MATCH: { username: '1@2.com', password: 'f-o-o' },
  NO_USER_DETAILS: { username: '', password: '' },
  NO_PASSWORD: { username: 'bob@example.com', password: '' },
  STANDARD: { username: 'bob@example.com', password: '10203040' },
};

Given('the user is on the login screen', async () => {
  await browser.url('/login');
});

When('the user enters {string} credentials', async (type) => {
  const credentials = TEST_DATA[type.toUpperCase()];
  await LoginPage.enterUsername(credentials.username);
  await LoginPage.enterPassword(credentials.password);
});

When('clicks on the login button', async () => {
  await LoginPage.clickLogin();
});

Then('the user should see the dashboard', async () => {
  expect(await DashboardPage.isWelcomeMessageVisible()).to.be.true;
});

Then('an error message should be displayed', async () => {
  const errorMessage = await $('~error-message');
  expect(await errorMessage.isDisplayed()).to.be.true;
});
