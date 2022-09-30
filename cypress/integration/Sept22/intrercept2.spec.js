///<reference types = "cypress"/>
describe('verify the inyercaept concept', function () {
    it('verify the intercept', function () {
        cy.intercept({
            method: "GET",
            url: "https://jsonplaceholder.cypress.io/comments/1"
        }).as('getComment')
        cy.visit('https://example.cypress.io/commands/network-requests')
        cy.contains('Get Comment').click()
        cy.wait('@getComment').then(function ({ response, request }) {
            //let {response , request} = res
            //   cy.log(response)
            //   cy.log(request)
            cy.get('.network-comment').should('have.text', response.body.body)
            expect(response.statusCode).to.equal(200)
            expect(request.method).to.equal('GET')
        })

    })

    it('verify the intercept', function () {
        cy.intercept({
            method: "GET",
            url: "https://jsonplaceholder.cypress.io/comments/1"
        },
            {
                body: {
                    "postId": 1,
                    "id": 1,
                    "name": "id labore ex et quam laborum",
                    "email": "Eliseo@gardner.biz",
                    "body": "hello"
                }
            }

        ).as('getComment')
        cy.visit('https://example.cypress.io/commands/network-requests')
        cy.contains('Get Comment').click()
        cy.wait('@getComment').then(function ({ response, request }) {
            //let {response , request} = res
            //   cy.log(response)
            //   cy.log(request)
            cy.get('.network-comment').should('have.text', response.body.body)
            expect(response.statusCode).to.equal(200)
            expect(request.method).to.equal('GET')
        })

    })


    it('verify the intercept', function () {
        cy.intercept({
            method: "POST",
            url: "https://jsonplaceholder.cypress.io/comments"
        }
        ).as('postComment')
        cy.visit('https://example.cypress.io/commands/network-requests')
        cy.contains('Post Comment').click()
        cy.wait('@postComment').then(function ({ response, request }) {
            // cy.log(response)
            // cy.log(request)
            expect(response.statusCode).to.eqls(201)
            expect(response.body).to.have.keys(["name","email","id","body"])
            expect(request.method).to.eqls('POST')
            cy.get('.network-post-comment').should('have.text','POST successful!')
        })


    })

    

    it('verify the intercept', function () {
        cy.intercept({
            method: "PUT",
            url: "https://jsonplaceholder.cypress.io/comments/1"
        }
        ).as('updateComment')
        cy.visit('https://example.cypress.io/commands/network-requests')
        cy.contains('Update Comment').click()
        cy.wait('@updateComment').then(function ({ response, request }) {
            // cy.log(response)
            // cy.log(request)
            expect(response.statusCode).to.eqls(200)
            expect(response.body).to.have.keys(["name","email","id","body"])
            expect(request.method).to.eqls('PUT')
            
        })


    })

    

    it.only('verify the intercept', function () {
        cy.intercept({
            method: "PUT",
            url: "https://jsonplaceholder.cypress.io/comments/1"
        },{
            body:{
                "n": "PUT",
                "e": "minksoleopc@gmai.com",
                "b": "ram",
                "i": 1
              }
        }
        ).as('updateComment')
        cy.visit('https://example.cypress.io/commands/network-requests')
        cy.contains('Update Comment').click()
        cy.wait('@updateComment').then(function ({ response, request }) {
            expect(response.statusCode).to.eqls(200)
            expect(response.body).to.have.keys(["n","e","i","b"])
            expect(request.method).to.eqls('PUT')
            
        })


    })

})



