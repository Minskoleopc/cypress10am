///<reference types = "cypress"/>

// Test scenario

describe('TS_01 Verify the login functionality',function(){

    beforeEach(function(){
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
       
    })

    it('TC_01 Check with valid credential',function(){
        cy.login('Admin','admin123')
        cy.get('img[alt="client brand banner"]').should('be.visible')

    })

    it('TC_02 Check with invalid credential',function(){
        cy.login('dmin','admi3')
        cy.get('p[class="oxd-text oxd-text--p oxd-alert-content-text"]')
        .should('have.text','Invalid credentials')

    })


   

})