class HairCarePage{
    
    get productName(){
        return cy.get('.fixed_wrapper a');
    }
}

export default HairCarePage;