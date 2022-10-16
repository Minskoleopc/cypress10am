export class Login {

    elements = {
        // css selector
        username:"#user-name",
        password:"#password",
        loginButton:"#login-button",
        validationError:".error-button",
        logo:".login_logo"

    }

    navigate(){
        cy.visit('https://www.saucedemo.com/')   
    }

    validLogin(username,password){
        cy.get(this.elements.username).type(username)
        cy.get(this.elements.password).type(password)
        cy.get(this.elements.loginButton).click()
        cy.url().should('contain','inventory')
    }

    invalidLogin(username,password){
        cy.get(this.elements.username).type(username)
        cy.get(this.elements.password).type(password)
        cy.get(this.elements.loginButton).click()
        cy.get(this.elements.validationError).should('be.visible')

    }

    validateLog(){
        cy.get(this.elements.logo).should('be.visible')
    }

}