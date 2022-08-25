///<reference types = "cypress"/>

// Test scenario

describe('TS_01 Verify the login functionality',function(){
    beforeEach(function(){
        cy.login('Admin','admin123')
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
       
    })
    it('TC_01 verify logo visible on dashboard',function(){
        cy.get('img[alt="client brand logo"]').should('be.visible')
    })

    it('TC_02 verify the default tab to be PIM',function(){
        cy.url().should('contain','pim')
        cy.get("h6[class]").should('have.text',"PIM")
    })


})