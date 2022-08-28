///<reference types = "cypress"/>

describe('Tranverse method in cypress',function(){
    beforeEach(function(){
        cy.visit('https://webdriveruniversity.com/Data-Table/index.html')
    })

    it('To get children of DOM elements, use the .children() command.',function(){
        cy.get('.traversal-button-states').children().should('have.length',4)
    })

    it('To get the first DOM element within elements, use the .first() command.',function(){
        cy.get('.traversal-button-states').children().first().should('have.text',"Danger")
    })

    it('To get the last DOM element within elements, use the .last() command.',function(){
        cy.get('.traversal-button-states').children().last().should('have.text',"Alert")
    })

    it('To get a DOM element at a specific index, use the .eq() command.',function(){
        cy.get('.traversal-button-states').children().eq(1).should('have.text',"Warning")
    })


    // siblings
    it('To get the next sibling DOM element within elements, use the .next() command.',function(){
        cy.get('#tea').next().should('have.text','Milk')
        cy.get('#tea').next().should('have.attr','id','milk')
    })

    it('To get the previous sibling DOM element within elements, use the .prev() command.',function(){
       cy.get('#tea').prev().should('have.text','Coffee')
       cy.get('#tea').prev().should('have.attr','id','coffee')
    })


    it('To get all sibling DOM elements of elements, use the .siblings() command.',function(){
        cy.get('#tea').siblings().should('have.length',4)
      
    })
 

    it('To get all of the next sibling DOM elements within elements until another element, use the .nextUntil() command.',function(){
        cy.get('#tea').nextUntil('#sugar').should('have.length',2)
      
    })


    it('To get all sibling DOM elements of elements, use the .siblings() command.',function(){
        cy.get('#sugar').prevUntil('#tea').should('have.length',2)
    
    })

    it('To get all previous sibling DOM elements within elements, use the .prevAll() command.',function(){
        cy.get('#sugar').prevAll().should('have.length','4')
    })

    it('To get all of the next sibling DOM elements within elements, use the .nextAll() command.',function(){
        cy.get('#tea').nextAll().should('have.length',3)
    
    })


})
