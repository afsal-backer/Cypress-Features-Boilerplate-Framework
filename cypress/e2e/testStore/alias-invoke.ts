import HairCarePage from "../../support/pageObjects/testStore/hairCare";
import HomePage from "../../support/pageObjects/testStore/homePage";

describe("Feature - Alias and Invoke: Follows Page Object Modal", () => {

  const home = new HomePage();
  const hairCare = new HairCarePage();

  it("Validate a specific haircare product", () => {
    cy.visit(home.url);

    home.tabs.contains("Hair Care").click();
    hairCare.productName.eq(0).invoke('text').as('productThunder');

    cy.get('@productThunder').its('length').should('be.gt', 5);
    cy.get('@productThunder').should('include','Seaweed Conditioner');
  });

  it("Validate product thumbnail", () => {
    cy.visit(home.url);

    home.thumbnail.as('productThumbanail');

    cy.get('@productThumbanail').should('have.length','16');
    cy.get('@productThumbanail').find('.productcart').invoke('attr','title').should('include','Add to Cart');

  });

  it("Calculate total of all products", () => {
    let totalPrice = 0;
    cy.visit(home.url);

    cy.get('.oneprice').invoke('text').then(linktext =>{
      let prices = linktext.split('$');
      for(let i=0; i<prices.length; i++){
        totalPrice += Number(prices[i])
      }
      cy.log("totalPrice is ",totalPrice);
    })

  });
});
