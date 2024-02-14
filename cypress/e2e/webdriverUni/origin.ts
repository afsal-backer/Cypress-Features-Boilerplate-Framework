describe("Feature - Origin feature", ()=>{


    it("Test origin feature",()=>{
        
        cy.origin("https://webdriveruniversity.com/", ()=>{
            cy.visit('/');
        });

        cy.origin('https://automationteststore.com/',()=>{
            cy.visit('/');
        });
    })
})
