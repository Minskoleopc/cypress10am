///<reference types = "cypress"/>

describe('Window test commands',function(){

    this.beforeEach(function(){
        cy.visit('http://automationpractice.com/index.php')
    })

    it('Verify the URI properties for window object',function(){
        cy.window().should(function(win){
            let loc = win.location
            // console.log(loc.hash)
            // console.log(loc.host)
            // console.log(loc.pathname)
            // console.log(loc.protocol)
            // console.log(loc.origin)
//-----------------------------------------------------------------
            expect(loc.hash).to.eqls('')
            expect(loc.host).to.eqls('automationpractice.com')
            expect(loc.pathname).to.eqls('/index.php')
            expect(loc.protocol).to.eqls('http:')
            expect(loc.origin).to.eqls('http://automationpractice.com')

        })

    
    })

    it('Window - reload',function(){
        cy.window().should(function(win){
            win.location.reload()
        })
    })

    it('Cypress- reload',function(){
       cy.reload()
    })

    it('Window - navigation commands',function(){
        cy.get('.sf-menu > :nth-child(1) > [href="http://automationpractice.com/index.php?id_category=3&controller=category"]').click()
        cy.window().should(function(win){
            win.history.back()   // win.history.go(-1)
        })
        cy.get('a[class="blockbestsellers"]').should('be.visible')
        cy.window().should(function(win){
            win.history.forward() 
        })
        cy.get("h2[class='title_block']").should('be.visible') //  // win.history.go(1)

     })

     it('cypress - navigation commands',function(){
        cy.get('.sf-menu > :nth-child(1) > [href="http://automationpractice.com/index.php?id_category=3&controller=category"]').click()
        cy.go('back') // cy.go(-1)
        cy.get('a[class="blockbestsellers"]').should('be.visible')
        cy.go('forward') // cy.go(1)
        cy.get("h2[class='title_block']").should('be.visible') 

     })

     it.only('URI properties with cypress',function(){
        cy.hash().should('eq',"")
        cy.location('pathname').should('eq','/index.php')
        cy.location('host').should('eq','automationpractice.com')
        cy.location('origin').should('eq','http://automationpractice.com')
        cy.location('protocol').should('eq','http:')


     })

     // localstorage , sessionsession , cookie





})