exports.config = {
    runner: 'local',
    specs: ['./features/**/*.feature'],
    maxInstances: 1,
    capabilities: [{
      platformName: 'iOS',
      deviceName: 'iPhone 13',
      app: '/path/to/app.app',
      automationName: 'XCUITest',
    }],
    framework: '@wdio/cucumber-framework',
    cucumberOpts: {
      require: ['./features/step_definitions/**/*.js'],
      timeout: 60000,
    },
    reporters: ['spec', ['allure', { outputDir: 'reports/allure-results' }]],
  };
  