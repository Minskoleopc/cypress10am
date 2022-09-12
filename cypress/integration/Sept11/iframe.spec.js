///<reference types = "cypress"/>

describe('verify the iframe in cypress',function(){

    const getIframeBody = (id)=>{
        return cy.get(`#${id}`).its('0.contentDocument.body').then(cy.wrap)
    }


    it('verify the iframe vai jquery',function(){

        cy.visit('http://www.webdriveruniversity.com/IFrame/index.html')
        // cy.get('a[href="index.html"]').should('have.text','Home')
        // find the iframe
        // apply jquery method apple 
        // reach the body if iframe document body 
        // then reach out to element 

        cy.get('#frame').then(function($el){
            //cy.log($el)
            let body = $el.contents().find('body')
            cy.wrap(body).as('bdy')
            cy.get('@bdy').find('a[href="index.html"]').should('have.text','Home')
        })
      
        
    })


    it('verify the ifram via javascript',function(){

        cy.visit('http://www.webdriveruniversity.com/IFrame/index.html')
        cy.get('#frame').then(function(el){
            //cy.log(el[0].contentDocument.body)

            let body = el[0].contentDocument.body
            cy.wrap(body).as('bdy')
            cy.get('@bdy').find('a[href="index.html"]').should('have.text','Home')
        })

    })
    it.only('verify the ifram via javascript',function(){

        cy.visit('http://www.webdriveruniversity.com/IFrame/index.html')
        getIframeBody('frame').find('a[href="index.html"]').should('have.text','Home')

    })

  



})

// 20 finish // 4 pm typescript // jest // playwright (javascript)
