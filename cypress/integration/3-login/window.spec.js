///<reference types = "cypress"/>

describe('Window command in cypress',function(){

    it.skip('Window URI properties',function(){
        cy.visit('http://www.webdriveruniversity.com/Contact-Us/contactus.html')
        cy.window().should((win)=>{
            // console.log(win.location.host)
            // console.log(win.location.pathname)
            // console.log(win.location.protocol)
            // console.log(win.location.hash)
            expect(win.location.host).to.eqls('www.webdriveruniversity.com')
            expect(win.location.pathname).to.eqls("/Contact-Us/contactus.html")
            expect(win.location.hash).to.eqls('')
            expect(win.location.protocol).to.eqls('http:')

           // cypress 
            //cy.hash().should('eq','')
            cy.location('hash').should('eq','')
            cy.location('host').should('eq','www.webdriveruniversity.com')
            cy.location('protocal').should('eq','http:')
            cy.location('pathname').should('eq','/Contact-Us/contactus.html')
        
        })




    })


    

    it.skip('Window reload and with cypress',function(){
        cy.visit('http://www.webdriveruniversity.com/Contact-Us/contactus.html')
        // cy.window().should(function(win){
        //     win.location.reload()
        // })
        cy.reload()

    })

    it('Window reload and with cypress',function(){
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.get('p[class]').eq(2).click()
        // cy.window().should(function(win){
        //     // win.history.back()
        //     // win.history.forward()
        //     // win.history.go(-1)
        //     // win.history.go(1)
        // })

        cy.go(-1)
        cy.go(1)
        cy.go('back')
        cy.go('forward')
    

    })





})