describe("Feature - Basic page navigation", ()=>{


    it("Should navigate between pages",()=>{
        
        cy.visit("https://webdriveruniversity.com/");
        cy.get('#contact-us').invoke("removeAttr", "target").click({force: true});

        cy.go('back');
        cy.go('forward');
        cy.reload();

    })
})
