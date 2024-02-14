describe("Feature - iFrames", () => {
  it("Handle iFrame and Models", () => {
    cy.visit("https://webdriveruniversity.com/IFrame/index.html");

    cy.get("#frame").then(($iframe) => {
      const body = $iframe.contents().find("body");
      cy.wrap(body).as("iframe");
    });

    cy.get("@iframe").find("#button-find-out-more").click();
    cy.get("@iframe").find("#myModal").as("modal");

    cy.get("@modal").should(($expectedText) => {
      const text = $expectedText.text();
      expect(text).to.include("Welcome to");
    });

    cy.get("@modal").contains("Close").click();
  });
});
