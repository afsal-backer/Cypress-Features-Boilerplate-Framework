describe("Feature - Checkbox", ()=>{

    it("Test checkbox feature",()=>{
        cy.visit("https://webdriveruniversity.com/Popup-Alerts/index.html");

        //check
        cy.get('#button1').check();
        cy.get('#button1').check().should('be.checked');

        cy.get('#button2').check().should('not.be.checked');

        cy.get('#button1').as('option-1');
        cy.get('@option-1').check();

        //uncheck
        cy.get('#button1').uncheck();

        //multiple

        cy.get("input[type='checkbox']").check(["option-1", "option-2"]);
    })
})
