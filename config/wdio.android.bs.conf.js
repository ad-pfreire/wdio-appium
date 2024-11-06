require('dotenv').config()
const {config} = require('./wdio.shared.conf');
// ============
    // BrowserStack Credentials
    // ============
config.user = process.env.BROWSERSTACK_USER; 
config.key = process.env.BROWSERSTACK_KEY; 


    // ============
    // Specs
    // ============

config.specs = [

    `${process.env.LOCAL_PATH}/test/specs/android-native.spec.js`
];

  // ============
  // Capabilities
  // ============ 

config.capabilities = [
    {
        'platformName': 'Android',
        'appium:platformVersion': '14.0',
        'appium:deviceName':'Google Pixel 8',
        'appium:automationName':'UIAutomator2',
        'appium:app': 'bs://faab64c2ac93bf5db1236c5078f1b806fdd691c6',
        'appium:autoGrantPermissions': true
     }

]

//
    // Test runner services
    // Services take over a specific job you don't want to take care of. They enhance
    // your test setup with almost no effort. Unlike plugins, they don't add new
    // commands. Instead, they hook themselves up into the test process.
    config.services = ['browserstack'];


exports.config = config;