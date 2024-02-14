import HomePage from '/Users/afsalbacker/Documents/GitHub/Cypress-Automation-Framework/cypress/support/pageObjects/testStore/homePage'

describe("Feature - Custom Commands", ()=>{
    const home = new HomePage();
    
    before(()=>{
        cy.fixture('example').then((data)=> {
            globalThis.data = data;
        });
    })

    it("Should be able to submit a successful contact us form",()=>{
        home.visitHomePage();
        
        cy.xpath('//a[@href="https://automationteststore.com/index.php?rt=content/contact"]').click();
        home.name.type(globalThis.data.first_name);

        home.email.should('have.attr', 'name', 'email');

        home.email.type(globalThis.data.email);
        home.enquiry.type("How is everything going?");
        home.clickSubmit();
        home.header.should('have.text',' Contact Us');
    })

    it("Custom commmands",()=>{

        cy.visit("https://automationteststore.com/");
        cy.xpath('//a[@href="https://automationteststore.com/index.php?rt=content/contact"]').click();

        // Custom commands
        cy.fillForm('John Doe', 'john@example.com', 'Hello, this is a test message.', 'Submit', '.maintext', ' Contact Us');
    })
})
