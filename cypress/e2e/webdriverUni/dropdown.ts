describe("Feature - Dropdown", ()=>{

    it("Test dropdown feature",()=>{
        cy.visit("https://webdriveruniversity.com/Popup-Alerts/index.html");

        cy.get('#dropdown').select('java');
        cy.get('#dropdown').select('c++').should('have.value', 'c++');
     
    })
})
