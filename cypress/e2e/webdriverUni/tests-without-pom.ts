describe("Basic test without page object modal desing pattern", ()=>{
    
    it("Should be able to submit a successful contact us form",()=>{

        cy.visit("https://webdriveruniversity.com/");
        
        cy.document().should('have.property', 'charset').and('eq','UTF-8');
        cy.title().should('include','WebDriverUniversity.com');
        cy.url().should('eq', 'https://webdriveruniversity.com/');

        cy.get('#contact-us').invoke("removeAttr", "target").click({force: true});
        cy.get('.section_header').should('have.text','CONTACT US');

        cy.get('[name="first_name"]').type('John');
        cy.get('[name="last_name"]').type('Doe');
        cy.get('[name="email"]').type('john@doe.com');
        cy.get('[name="message"]').type('Adding a comment');
        cy.get('[value="SUBMIT"]').click();

        cy.get('#contact_reply > h1').should('have.text','Thank You for your Message!');

    })

    it("Should NOT be able to submit a successful contact us form as all fields are required.",()=>{
        
        cy.visit("https://webdriveruniversity.com/");
        cy.get('#contact-us').invoke("removeAttr", "target").click({force: true});
        cy.get('.section_header').contains("CONTACT US");

        cy.get('[name="first_name"]').type('John');;
        cy.get('[value="SUBMIT"]').click();

        cy.get('body').contains('Error: all fields are required');
    })
})
