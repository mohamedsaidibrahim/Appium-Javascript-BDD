exports.config = {
    runner: 'local',
    specs: ['./features/**/*.feature'],
    maxInstances: 1,
    capabilities: [{
      platformName: 'Android',
      deviceName: 'emulator-5554',
      app: '/path/to/app.apk',
      automationName: 'UiAutomator2',
    }],
    framework: '@wdio/cucumber-framework',
    cucumberOpts: {
      require: ['./features/step_definitions/**/*.js'],
      timeout: 60000,
    },
    reporters: ['spec', ['allure', { outputDir: 'reports/allure-results' }]],
  };
  