describe("Some API Tests", () => {
  it("Should log information of all hair care products", () => {
    cy.intercept("POST", "**/*/realwaorld").as("newUser");

    cy.wait("@newUser").should(({ request, response }) => {
      cy.log("Request: " + JSON.stringify(request));
      cy.log("Response: " + JSON.stringify(response));

      expect(response.statusCode).to.eq(200);
      expect(request.body.user.name).to.eq("John");
    });
  });

  it("Login API", () => {
    const email = "";
    const password = "";

    const userCreds = {
      email: email,
      password: password,
    };

    cy.request("POST", "https://", userCreds).then((response) => {
      expect(response.status).to.eq(200);
    });

    cy.request("POST", "https://", userCreds)
      .its("body")
      .then((body) => {
        const token = body.auth.token;
        cy.wrap(token).as("userToken");

        const userToken = cy.get("@userToken");
        cy.visit("https://", {
          onBeforeLoad(browser) {
            browser.localStorage.setItem("token", JSON.stringify(userToken));
          },
        });
        cy.wait(2000);
      });
  });
});
