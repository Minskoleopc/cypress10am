///<reference types = "cypress"/>

describe('Verify concept of hooks in js',function(){
    before(function(){
        cy.log('Before everthing')
    })
    after(function(){
        cy.log('after every thing')
    })
    beforeEach(function(){
        cy.log('I am before each testcase')  
    })
    afterEach(function(){
        cy.log('I am after every testcase')
    })

    it('Testcase one',function(){
        cy.log('Testcase one')
    })

    it('Testcase two',function(){
        cy.log('Testcase two')  
    })

})