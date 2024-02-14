class HomePage{
    
    readonly url: string;

    constructor() {
        this.url = "https://automationteststore.com/"
      }
    
    get name(){
        return cy.get('#ContactUsFrm_first_name');
    }

    get tabs(){
        return cy.get('.categorymenu a');
    }

    get email(){
        return cy.get('#ContactUsFrm_email');
    }

    get enquiry(){
        return cy.get('#ContactUsFrm_enquiry');
    }

    get submit(){
        return cy.get('button[title=Submit]');
    }

    get header(){
        return cy.get('.maintext');
    }

    get thumbnail(){
        return cy.get('.thumbnail');
    }

    get price(){
        return cy.get('.oneprice');
    }

    
    
    visitHomePage(){
        cy.visit(this.url);
    }

    clickSubmit(){
        this.submit.click();
    }
}

export default HomePage;