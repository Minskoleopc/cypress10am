///<reference types = "cypress"/>

// Test scenario

describe('TS_01 Verify the login functionality',function(){

    it('TC_01 Check with valid credential',function(){
        // visit the page
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        // element find (username) and type username
        cy.get('input[name="username"]').type('Admin')
        // element find (password) and type password
        cy.get('input[name="password"]').type('admin123')
        // click on login button 
        cy.get('button[type="submit"]').click()
        // validate the any element on dasbboard
        cy.get('img[alt="client brand banner"]').should('be.visible')

    })

    it('TC_02 Check with invalid credential',function(){
        // visit the page
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        // element find (username) and type incorrect username
        cy.get('input[name="username"]').type('Adminaa')
        // element find (password) and type incorrect  password
        cy.get('input[name="password"]').type('admin1dd23')
        // click on login button 
        cy.get('button[type="submit"]').click()
        // validate the correct alert msg to user
        cy.get('p[class="oxd-text oxd-text--p oxd-alert-content-text"]')
        .should('have.text','Invalid credentials')

    })


})