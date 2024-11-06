import {$, $$, expect,driver } from "@wdio/globals";

describe('iOS Find Element', () => {
    it('fin element by accesibility id', async () => {
       await $('~Alert Views').click(); 
        await $('~Simple').click();
        // para acceder a todo el pop-up (no el text especifico)
        await expect(await driver.getAlertText()).toContain("A Short Title Is Best");
    });

    // PILAS!! AQUI HAY UN FOR-OF LOOP

    it('find by tag name', async () => {
        // single element
        console.log(await $('XCUIElementTypeStaticText').getText());

        // multiple elements
        const textEls = await $$('XCUIElementTypeStaticText');

        for (const element of textEls) {
            console.log(await element.getText());
            
        }
    });


    it('find element by accesibility id', async () => {
        // XPATH SYNTAX = (//tagname[@attribute=value])

        //  await $('//XCUIElementTypeStaticText[@name="Alert Views"]').click(); 
        //  await $('//XCUIElementTypeStaticText[@label="Simple"]').click();

        // No se necesita 'XCUIElementTypeStaticText' , se puede cambiar por *
         await $('//*[@name="Alert Views"]').click(); 
         await $('//*[@label="Simple"]').click();

         // para acceder a todo el pop-up (no el text especifico)
         await expect(await driver.getAlertText()).toContain("A Short Title Is Best");

     });
    
it('find element by class chain', async () => {
        //  const alertText = '**/XCUIElementTypeStaticText[`name == "Alert Views"`]';
         const alertText = '**/XCUIElementTypeStaticText[`name CONTAINS "Alert"`]';

         await $(`-ios class chain:${alertText}`).click(); 
         await $('//*[@label="Simple"]').click();
         await expect(await driver.getAlertText()).toContain("A Short Title Is Best");

});

it('find element by predicate string', async () => {
         //const alertText = 'name == "Alert Views"';
         const alertText = 'value BEGINSWITH[c] "alert"';
         await $(`-ios predicate string:${alertText}`).click(); 
         await $('//*[@label="Simple"]').click();
         await expect(await driver.getAlertText()).toContain("A Short Title Is Best");

});

it.only('Exercise: Enter text in the search field', async () => {
    await $('~Search').click();
    await $('~Default').click();


    // PILAS! to add text on an input field? : .addValue
    await $('//XCUIElementTypeSearchField').addValue("I love this course!");
    await expect($('//XCUIElementTypeSearchField')).toHaveAttr("value");

    await $('~Clear text').click();
    await expect($('//XCUIElementTypeSearchField')).not.toHaveAttr("value");

});


});