///<reference types = "cypress"/>

describe('verify the GET comment , post comment , update Comment xhr request',function(){

    it('verify the GetComment xhr call',function(){
        cy.intercept({
            method:"GET",
            url:"https://jsonplaceholder.cypress.io/comments/1"
        }).as('getComment')

        cy.visit('https://example.cypress.io/commands/network-requests')
        cy.contains('Get Comment').click()
        cy.wait('@getComment')
        cy.get('.network-comment').should('contain',`laudantium enim quasi est`)

    })

    it('verify the GetComment xhr call',function(){
        cy.intercept({
            method:"GET",
            url:"https://jsonplaceholder.cypress.io/comments/1"
        }).as('getComment')

        cy.visit('https://example.cypress.io/commands/network-requests')
        cy.contains('Get Comment').click()
        
        // method 
        // statusCode 
        // body
        // UI validation

        cy.wait('@getComment').then(function({response,request}){
            // cy.log(response)
            // cy.log(request)
            expect(response.statusCode).to.eq(200)
            expect(response.body).to.keys(['postId','id','name',"email",'body'])
            expect(request.method).to.eq('GET')
            cy.get('.network-comment').should('have.text',response.body.body)
        })

    })

    
    it('verify the POSTComment xhr call',function(){
        cy.intercept({
            method:"POST",
            url:"https://jsonplaceholder.cypress.io/comments"
        }).as('postComment')

        cy.visit('https://example.cypress.io/commands/network-requests')
        cy.contains('Post Comment').click()
 
        cy.wait('@postComment').then(function({response,request}){
            // cy.log(response)
            // cy.log(request)
            expect(response.statusCode).to.eq(201)
            expect(response.body).to.keys(['id','name',"email",'body'])
            expect(request.method).to.eq('POST')
            cy.get('.network-post-comment').should('have.text','POST successful!')
        })

    })

    
    it('verify the Update Comment xhr call',function(){
        cy.intercept({
            method:"GET",
            url:"https://jsonplaceholder.cypress.io/comments/1"
        }, 
        {
            statusCode:401,
            body:{
                "postId": 1,
                "nameC":"ram",
                "id": 1,
                "name": "id labore ex et quam laborum",
                "email": "Eliseo@gardner.biz",
                "body": "Minskole"
              }
        }
        
        ).as('getComment')

        cy.visit('https://example.cypress.io/commands/network-requests')
        cy.contains('Get Comment').click()
        cy.wait('@getComment').then(function({response,request}){
            cy.log(response.body)
            expect(response.statusCode).to.eq(200)
            expect(response.body).to.keys(['postId','id','name',"email",'body','nameC'])
            expect(request.method).to.eq('GET')
            cy.get('.network-comment').should('have.text',response.body.body)
        })

    })

    
    it.only('verify the POSTComment xhr call',function(){
        cy.intercept({
            method:"PUT",
            url:"https://jsonplaceholder.cypress.io/comments/1"
        }).as('putComment')

        cy.visit('https://example.cypress.io/commands/network-requests')
        cy.contains('Update Comment').click()
 
        cy.wait('@putComment').then(function({response,request}){
            expect(response.statusCode).to.eq(200)
            expect(response.body).to.keys(['id','name',"email",'body'])
            expect(request.method).to.eq('PUT')
        })

    })

})