describe('Delete Note', () => {
    it('Skip Tutorial', async () => {
       await $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/btn_start_skip"]').click();

       await expect($('//*[@text="Add note"]')).toBeDisplayed();
        
    });

    it('add note, save changes & verify note', async () =>{
        await $('//*[@text="Add note"]').click();
        await $('//*[@text="Text"]').click();
        await expect($('//*[@text="Editing"]')).toBeDisplayed();

        // add note title 
        await $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/edit_title"]').addValue("Fav Anime List");
        
        // add note body
        await $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/edit_note"]').addValue("Naruto\nOnePiece\nAOT");

        // save the changes
        await driver.back();
        // await driver.back(); 

        // assertion
        await expect($('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/edit_btn"]')).toBeDisplayed();
        await expect($('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/view_note"]')).toHaveText("Naruto\nOnePiece\nAOT");


        // delete note

    });

    it('Delete a note & check the note in trash can', async () => {
        await driver.back();
        
        // PARA QUE FUNCIONE AQUI EL CAMBIE A @TEXT EN VEZ DE USAR EL @RESORUCE ID (y ahora como hago apra que use l resource id???!!! )
        const note = await $('//*[@text="Fav Anime List"]').getText();

        //Click on the note
        await $('//*[@text="Fav Anime List"]').click();

        // Click on more icon.... (general: TRY TO WORK WITH 'ACCESIBILTY IDs' Cuz it's cross compatible android/iOS !!!)
        await $('~More').click();

        // click on Delete item
        await $('//*[@text="Delete"]').click();

        //accept alert
        await driver.acceptAlert();

        //click on nav icon
        await  $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/icon_nav"]').click();

        // click on trash can item

        await $('//*[@text="Trash Can"]').click();

        //assertions

        const trashCanItem = await $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/title"]');// fav anime list

        await expect(trashCanItem).toHaveText(note);

    });
   
});