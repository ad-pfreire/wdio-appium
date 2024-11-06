const path = require('path');

const {config} = require('./wdio.shared.conf');


    //
    // ====================
    // Runner Configuration
    // ====================

    config.port = 4724;
    //


    // ============
    // Specs
    // ============

config.specs = [

    '/Users/crifa/wdio-appium/test/specs/ios-native.spec.js'
];

  // ============
  // Capabilities
  // ============ 

config.capabilities = [
    { 
        'appium:platformName': 'ios',
        'appium:platformVersion': '18.0',
        'appium:deviceName':'iPhone 15',
        'appium:automationName':'XCUITest',
        'appium:app': 'app/ios/UIKitCatalog.app',

    }  

]

//
    // Test runner services
    // Services take over a specific job you don't want to take care of. They enhance
    // your test setup with almost no effort. Unlike plugins, they don't add new
    // commands. Instead, they hook themselves up into the test process.
    config.services ['appium'];

exports.config = config;