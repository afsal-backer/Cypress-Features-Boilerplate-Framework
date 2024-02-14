describe("Feature - Locator fetching features", ()=>{

    it("Fetch locators using different methods",()=>{
        cy.visit("https://webdriveruniversity.com/Popup-Alerts/index.html");
        cy.get('#dropdown').children('.active').should('contain', 'Contact Us');

        cy.get('#dropdown').closest('ul').should('have.class', 'group');

        cy.get('.button > *').filter('.active');

        cy.get('.button').find('li').find('a');

        cy.get('.button').first();

        cy.get('.button').last();

        cy.get('.button').contains('Tea').nextAll().should('have.length', '3');

        cy.get('.button').nextUntil('#milk');

        cy.get('.button').not('.disabled');

        cy.get('.button').parent().should('contain', 'Lorem');

        cy.get('#sugar').prev().should('contain','espresso');

        cy.get('#sugar').siblings().contains('test');
     
    })
})
