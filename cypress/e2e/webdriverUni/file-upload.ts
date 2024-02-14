describe("Feature - File Upload", ()=>{

    beforeEach(()=>{
        cy.visit("https://webdriveruniversity.com/File-Upload/index.html");
    })

    it("Test Upload file feature",()=>{
        cy.get('#myFile').selectFile("../image.png");
        cy.get('#submit-button').click();
     
    })
})
