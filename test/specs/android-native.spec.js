describe('Android Native Feature Test', () => {
    it('Access an Activity directly', async () => {
       // access activity
        await driver.startActivity("io.appium.android.apis", "io.appium.android.apis.app.AlertDialogSamples");
        
        // pause 
        await driver.pause(3000);

        //assertion
        await expect ($('//*[@text="App/Alert Dialogs"]')).toExist();
        
    }); 

    it('Working With Dialog Boxes', async () => {

        // access activity
        await driver.startActivity("io.appium.android.apis", "io.appium.android.apis.app.AlertDialogSamples");
       // click on first dialog
        await $('//*[@resource-id="io.appium.android.apis:id/two_buttons"]').click();

       // accept alert
       // await driver.acceptAlert();

       //   // dismiss alert
       //  await driver.dismissAlert();

       //get alert text
       console.log('ALERRT TEXT -->', await driver.getAlertText());

       // click on the OK Button
        await $('//*[@resource-id="android:id/button1"]').click();
       // assertion-alert box is no  longer visible
        await expect($('//*[@resource-id="android:id/alertTitle"]')).not.toExist();
       
    });

    it('Vertical Scrolling', async() => {
        await $('~App').click();
        await $('~Activity').click();

        // scroll to the end (not stable if element gets moved)
        // await $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollToEnd(1,5)');


        // scrollTextIntoView - more stable
        await $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollTextIntoView("Secure Surfacess")').click();
        
        // await $('~Secure Surfaces').click();

        // assertion
        await expect ($ ('~Secure Dialog')).toExist();



    });


    it('Horizontal Scrolling', async () => {
        await driver.startActivity(
            "io.appium.android.apis",
            "io.appium.android.apis.view.Gallery1"
        );

        //hORIZONTAL SCROLLING
        await $('android=new UiScrollable(new UiSelector().scrollable(true)).setAsHorizontalList().scrollForward()');
        await $('android=new UiScrollable(new UiSelector().scrollable(true)).setAsHorizontalList().scrollBackward()');

        await driver.pause(3000);
    });


    it.only('Scrolling Exercise-Android', async () => {

        // Access the Date Widget
        await driver.startActivity(
            "io.appium.android.apis",
            "io.appium.android.apis.view.DateWidgets1 "
        );

        //Get the current date
        const date = await $ ('//*[@resource-id="io.appium.android.apis:id/dateDisplay"]');
        const currentDate = await date.getText();

        //Click on "change the Date"
        await $('~change the date').click();

        //Scroll horizontally to the right to the next month
        await $('android=new UiScrollable(new UiSelector().scrollable(true)).setAsHorizontalList().scrollForward()');
        await driver.pause(3000);

        //Pick the 10th date from the month
        await $('//*[@text="10"]').click();

        //Click OK button
        await $('//*[@resource-id="android:id/button1"]').click();
        
        //verify the updated date
        await expect (await date.getText()).not.toEqual(currentDate);

    });    

});

