describe("Feature - Radio buttons", ()=>{

    it("Test radio button feature",()=>{
        cy.visit("https://webdriveruniversity.com/Popup-Alerts/index.html");

        cy.get('#radiobuttons').find("[type='radio]").first().check();
        cy.get('#radiobuttons').find("[type='radio]").eq(1).check();
     
    })
})
