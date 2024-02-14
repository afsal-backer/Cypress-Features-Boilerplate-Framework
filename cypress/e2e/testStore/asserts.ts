describe("Feature - Asserts",()=>{

    before(()=>{
        cy.viewport(550, 750);
    })
    
    it("Should be able to select item using item text using chains",()=>{
        cy.visit("https://automationteststore.com/");
        cy.title().should('contain','A place to practice your automation skills!');
        cy.get('.block_frame.block_frame_featured a')
          .should('have.attr','title','Skinsheen Bronzer Stick')
          .contains('Skinsheen Bronzer Stick').click();
    })

    it.only("Should be able to select item using item text using find and index",()=>{
        cy.visit("https://automationteststore.com/");
        cy.title().should('contain','A place to practice your automation skills!');
        cy.get('.fixed_wrapper').find('.prdocutname').eq(0).click();

        cy.log('Test completed!');
    })

    it("Should be able to select item using item text and display text using then() and expect",()=>{
        cy.visit("https://automationteststore.com/");
        cy.get('.fixed_wrapper').find('.prdocutname').eq(0).click().then((itemHeaderText)=>{
            const itemName = itemHeaderText.text();
            cy.log("Item name is: ",itemName);
            expect(itemName).is.eq('Skinsheen Bronzer Stick');
            expect(itemName).is.not.eq('Skinsheen Bronzer Shack');
        });
    })
})  