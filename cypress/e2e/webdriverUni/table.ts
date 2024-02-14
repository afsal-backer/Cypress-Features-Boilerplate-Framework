describe("Reading from a table", () => {
  it("Test Table Traversing", () => {
    cy.visit("https://webdriveruniversity.com/Data-Table/index.html");

    let totalAge: number = 0;
    let userDetails = [];

    cy.get("#thumbnail-1 td")
      .each(($element, index, $list) => {
        userDetails[index] = $element.text();
      })
      .then(() => {
        for (let i = 0; i < userDetails.length; i++) {
          if (Number(userDetails[i])) {
            totalAge = totalAge + Number(userDetails[i]);
          }
        }
        cy.log(totalAge.toString());
        expect(totalAge).to.eq(322);
      });
  });

  it.only("Table reading single age", () => {
    cy.visit("https://webdriveruniversity.com/Data-Table/index.html");

    let searchName = "Woods";

    cy.get("#thumbnail-1 td:nth-child(2)").as("namesSelector");

    cy.get("@namesSelector").each(($element, index, $list) => {
      const nameToFetch = $element.text();
      if (nameToFetch === searchName) {
        cy.get("@namesSelector").eq(index).next()
          .then((getAge) => {
            const age = getAge.text();
            cy.log(age);
            expect(age).to.eq("80");
          });
      }
    });
  });
});
