///<reference types = "cypress"/>

describe('validate the API', function () {
    it('verify the GET API', function () {
        cy.request({
            method: "GET",
            url: "https://reqres.in/api/users?page=1"
        }).then(function (res) {
            expect(res.status).to.eq(200)
        })
    })

    it('verify the POST request', function () {
        cy.request({
            method: 'POST',
            url: 'https://reqres.in/api/users',
            body: {
                "name": "morpheus",
                "job": "leader"
            }

        }).then(function (res) {
            //cy.log(res.status)
            expect(res.status).to.eq(201)
        })

    })

    it('Verify the PUT request', function () {

        cy.request({
            method: "PUT",
            url: "https://reqres.in/api/users/2",
            body: {
                "name": "morpheus",
                "job": "leader"
            }
        }).then(function(res){
            //cy.log(res)
            expect(res.status).to.eq(200)
        })
    })

    it('verify the DELETE request',function(){
        cy.request({
            method:"DELETE",
            url:'https://reqres.in/api/users/2'
        }).then(function(res){
            expect(res.status).to.eq(204)
        })

    })

 
    //https://developer.paypal.com/dashboard/applications/sandbox

    // create app 
    // client ID and secret ID (donot share and push on git)
    // SCFZKCnTsEEaOoOHvz1KzIW5hKK9qfthJ6WPKvdKMLg7Z1C4mBUWY453
    // R7b4cRgRvFugPlGlStBRo1Z_Zd9aPeGP8-VozpPk_3UsDtWfqSlf

    // Using this key (client ID and secret) generate token via API 
    // https://developer.paypal.com/api/rest/
    // Follw the step to hit post api to generate token

    // Using this token to hit other paypal api
    // MXZq6io_WzzSOHgbKl9AwysgOmaNkE1b_kLTr6DBEeYVcNhXqeMAJ0C94_-533-H2nxIHRQ

    // Hit getInvoice api using token 
    //https://developer.paypal.com/docs/api/invoicing/v2/#invoices_list

})