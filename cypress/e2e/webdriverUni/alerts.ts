describe("Feature - Alerts", ()=>{

    it("Assert alert",()=>{
        cy.visit("https://webdriveruniversity.com/Popup-Alerts/index.html");

        cy.get('#button1').click();

        cy.on('window:alert', (str) => {
            expect(str).to.equal('I am an alert box!');
        })
    })

    it("Accept alert",()=>{
        cy.visit("https://webdriveruniversity.com/Popup-Alerts/index.html");

        cy.get('#button4').click();

       cy.on('window:confirm', (str)=>{
        return true; //click Okay
       })
    })

    it("Cancel alert",()=>{
        cy.visit("https://webdriveruniversity.com/Popup-Alerts/index.html");

        cy.get('#button4').click();

       cy.on('window:confirm', (str)=>{ 
        return false; //click cancel
       })
    })

    it.only("Stub alert",()=>{
        cy.visit("https://webdriveruniversity.com/Popup-Alerts/index.html");

        cy.get('#button4').click();

       cy.on('window:confirm', (str)=>{ 
        return false; //click cancel
       })
    })
})
