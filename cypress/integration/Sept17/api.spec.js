///<reference types = "cypress"/>

describe('verify  GET POST PUT DELETE api ', function () {

    let accessToken = `cd2ac6be51d3e141feb492b0cc0ddd8d3eb8d0bc7da80d1a1ef57ecdd74bf517`
    it('verify the go rest - GET API ', function () {
        cy.request({
            method: 'GET',
            url: "https://gorest.co.in/public/v2/users",
            headers: {
                'Authorization': `Bearer ${accessToken}`
            }

        }).then(function (response) {
            //cy.log(response)
            expect(response.status).to.eq(200)
            expect(response.body?.length).to.eq(10)
            expect(response.duration).to.be.lessThan(700)

            response.body.forEach(element => {
                expect(element).to.have.keys(['id', 'name', 'email', 'status', 'gender'])
            });

            response.body.forEach(element => {
                expect(element.id).not.to.null
                expect(element.name).not.to.null
                expect(element.email).not.to.null
                expect(element.status).not.to.null
                expect(element.gender).not.to.null
            });

        })

    })

    // creatuser
    it('verify the Create user API for Go rest', function () {
        cy.request({
            method: 'POST',
            url: 'https://gorest.co.in/public/v2/users',
            headers: {
                'Authorization': `Bearer ${accessToken}`
            },
            body: {
                name: "Tenali Ramakrishna",
                gender: "male",
                email: `c.ashdddna${Math.floor(Math.random() * 100000)}@gmail.com`,
                status: "active"
            }

        }).then(function ({ status, body, duration }) {
            expect(status).to.eq(201)
            expect(body).to.have.all.keys("id", "name", "email", "gender", "status")
            expect(duration).to.be.lessThan(1000)

        })
    })

    it('verify the API request to update the user', function () {
        cy.request({
            method: "PUT",
            url: "https://gorest.co.in/public/v2/users/77",
            headers: {
                'Authorization': `Bearer ${accessToken}`
            },
            body: {
                "name": "Allasani Peddana",
                "email":`c.ashdddna${Math.floor(Math.random() * 100000)}@gmail.com`,
                "status": "active"
            }
        }).then(function(res){
            //cy.log(res)
            expect(res.status).to.eq(200)
        })

    })

    it.only('verify the API request to delete the user', function () {
        cy.request({
            method: "DELETE",
            url: "https://gorest.co.in/public/v2/users/1",
            headers: {
                'Authorization': `Bearer ${accessToken}`
            }
          
        }).then(function(res){
            expect(res.status).to.eq(204)
        })

    })


    // POST - create 
    // PUT - existing email 
    // DELETE - delete
    // GET - Retrive





})