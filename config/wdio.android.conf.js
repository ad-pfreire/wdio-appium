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

    '/Users/crifa/wdio-appium/test/specs/android-native.spec.js'
];

  // ============
  // Capabilities
  // ============ 

config.capabilities = [
    {
        'appium:platformName': 'Android',
        'appium:platformVersion': '14.0',
        'appium:deviceName':'Pixel 8a',
        'appium:automationName':'UIAutomator2',
        'appium:app': './app/android/ColorNote+Notepad.apk',
        'appium:autoGrantPermissions': true
     }

]
