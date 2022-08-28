///<reference types = "cypress"/>

// radio button and checkbox

describe('verify the functionality for checkbox', function () {

    before(function () {
        cy.visit('https://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html')
    })

    it('verify the  one check box with click() function', function () {
        // check box   ---ticked
        // click()
        // check()
        // uncheck()
        cy.get('input[value="option-3"]').click().should('not.be.checked')
        cy.get('input[value="option-3"]').click().should('be.checked')

    })

    it('verify the  one check box with checked() and unchecked() function', function () {
        cy.get('input[value="option-3"]').check().should('be.checked')
        cy.get('input[value="option-3"]').uncheck().should('not.be.checked')

    })

    it('verify the  mutiple check box with checked() and unchecked() function', function () {
        cy.get('input[type=checkbox]').each(function (el) {
            cy.log(el)
            cy.wrap(el).as('checkbox')
            cy.get('@checkbox').check().should('be.checked')
            cy.get('@checkbox').uncheck().should('not.be.checked')
        })

    })

    it('verify the  one check radio button with click() function', function () {

        cy.get('input[value="green"]').click().should('be.checked')
        cy.get('input[value="blue"]').should('not.be.checked')

    })

    it('verify the  one check radio button with check() function', function () {
        cy.get('input[value="green"]').check().should('be.checked')
        cy.get('input[value="blue"]').should('not.be.checked')

    })

    it.only('verify the all  radio button with check() function', function () {
        cy.get('input[name ="color"]').each(function (el) {
            cy.wrap(el).as('radioButton')
            cy.get('@radioButton').check().should('be.checked')
        })
    })
    // 

    it.only('check whether the particular element is disabled', function () {
        cy.get('input[value="cabbage"]').should('be.disabled')
    })

    
    it.only('check whether the particular element is enabled', function () {
        cy.get('input[value="lettuce"]').should('be.enabled')
    })




})