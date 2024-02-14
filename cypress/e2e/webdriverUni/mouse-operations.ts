describe("Feature - Mouse actions", ()=>{

    it("Test different mouse actions.",()=>{
        cy.visit("https://webdriveruniversity.com/Popup-Alerts/index.html");

        //scroll
        cy.get('#dropdown').scrollIntoView().click();

        //drag and drop
        cy.get('#dragabble').trigger('mousedown', {which: 1});
        cy.get('#droppable').trigger('mousemove').trigger('mouseup', {force: true});

        //double click
        cy.get('#dropdown').dblclick();

        //click and hold
        cy.get('#dragabble').trigger('mousedown', {which: 1}).then(($element)=>{
            expect($element).to.have.css('background-color','rgb(0, 255, 0');
        })
     
    })
})
