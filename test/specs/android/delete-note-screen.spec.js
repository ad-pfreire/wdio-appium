const EditNoteScreen = require("../screenobjects/android/edit-note.screen");

describe('Delete Note', () => {
    before(async() => {
     await EditNoteScreen.skipTutorial();
     await EditNoteScreen.addAndSaveNote("Tv shows", "Friends\nBreakingBad\nPeakyBlinders");
     await driver.back();
    });

    it('Delete a note & check the note in trash can', async () => {
     
        // PARA QUE FUNCIONE AQUI EL CAMBIE A @TEXT EN VEZ DE USAR EL @RESORUCE ID (y ahora como hago apra que use l resource id (y asis ea mas general)???!!! )
        const note = await EditNoteScreen.firstNote.getText();

        //Click on the note
        await EditNoteScreen.firstNote.click();

        // Click on more icon.... (general: TRY TO WORK WITH 'ACCESIBILTY IDs' Cuz it's cross compatible android/iOS !!!)
        await EditNoteScreen.moreIcon.click();

        // click on Delete item
        await EditNoteScreen.deleteIcon.click();

        //accept alert
        await driver.acceptAlert();

        //click on nav icon
        await  EditNoteScreen.navIcon.click();

        // click on trash can item

        await EditNoteScreen.trashCanItem.click();

        //assertions

        const trashCanItem = await EditNoteScreen.firstNote;// fav anime list

        await expect(trashCanItem).toHaveText(note);

    });
   
});