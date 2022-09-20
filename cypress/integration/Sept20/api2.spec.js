
// create  --->
// update  ---> 
// delete --->
// promises 


// let pro = new Promise(function(resolve,reject){
//     let x  = 10
//     let y = 5
//     if(x == y){
//         resolve('hello')
//     }
//     else {
//         reject('bye')
//     }
// })

// pro.then(function(str){
//     console.log(str)
//     return "79"
// }).then(function(id){
//     console.log(id)
// })

describe('verify the create , update and delete', function () {
    let accessToken = `cd2ac6be51d3e141feb492b0cc0ddd8d3eb8d0bc7da80d1a1ef57ecdd74bf517`
    it("POST  > PUT > DELETE", function () {
        cy.request({
            method: "POST",
            url: "https://gorest.co.in/public/v2/users",
            headers: {
                'Authorization': `Bearer ${accessToken}`
            },
            body: {
                name: "Tenali Ramakrishna",
                gender: "male",
                email: `c.ashdddna${Math.floor(Math.random() * 100000)}@gmail.com`,
                status: "active"
            }
        }).then(function (res) {
            ///cy.log(res)
            expect(res.status).to.eql(201)
            return res.body.id
        }).then(function (id) {
            //cy.log(id)
            cy.request({
                method: "PUT",
                url: `https://gorest.co.in/public/v2/users/${id}`,
                headers: {
                    'Authorization': `Bearer ${accessToken}`
                },
                body: {
                    name: "chinmay deshpande",
                    gender: "male",
                    email: `c.ashdddna${Math.floor(Math.random() * 100000)}@gmail.com`,
                    status: "inactive"
                }

            }).then(function (res) {
                //cy.log(res)
                expect(res.status).to.eq(200)
                return res.body.id
            }).then(function (id) {
                cy.request({
                    method: "DELETE",
                    url: `https://gorest.co.in/public/v2/users/${id}`,
                    headers: {
                        'Authorization': `Bearer ${accessToken}`
                    }

                }).then(function (res) {
                    expect(res.status).to.eq(204)
                })

            })


        })


    })




})
