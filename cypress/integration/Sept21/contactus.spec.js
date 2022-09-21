import objI from '../../fixtures/contactus.json'
import users from '../../fixtures/multipleuser.json'
///<reference types = "cypress"/>
describe('verify the contact us form',function(){
    let objG ; // undefined note --- because scope of this keyword in arrow function is of it's immediate parent
    before(()=>{
        cy.fixture('contactus').then((data)=>{
            objG = data
        })
    })


    // first way
    let info = {
        firstName:"chinmay",
        lastName:"deshpande",
        email:"chinmaydeshpande010@gmail.com",
        comments:"i am new to js "
    }

    it('verify the contact us form  with object',function(){
        //cy.log(objG)
        cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html')
        cy.get('input[name="first_name"]').type(info.firstName)
        cy.get('input[name="last_name"]').type(info.lastName)
        cy.get('input[name="email"]').type(info.email)
        cy.get('textarea[name="message"]').type(info.comments)
        cy.get('input[value="SUBMIT"]').click()
        cy.get('h1').should('have.text','Thank You for your Message!')
    })


    it('verify the contactus via fixture for particular testcase',function(){

        // second way
        cy.fixture('contactus').then(function(obj){
            // cy.log(objG)
            //cy.log(info)
            cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html')
            cy.get('input[name="first_name"]').type(obj.firstName)
            cy.get('input[name="last_name"]').type(obj.lastName)
            cy.get('input[name="email"]').type(obj.email)
            cy.get('textarea[name="message"]').type(obj.comments)
            cy.get('input[value="SUBMIT"]').click()
            cy.get('h1').should('have.text','Thank You for your Message!')
        })

    })

    
    it('verify the contactus via fixture from before',function(){
        // third way
            cy.log(objG)
            cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html')
            cy.get('input[name="first_name"]').type(objG.firstName)
            cy.get('input[name="last_name"]').type(objG.lastName)
            cy.get('input[name="email"]').type(objG.email)
            cy.get('textarea[name="message"]').type(objG.comments)
            cy.get('input[value="SUBMIT"]').click()
            cy.get('h1').should('have.text','Thank You for your Message!')
    })

    it('verify the contactus via fixture from import',function(){
        // third way
            cy.log(objI)
            cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html')
            cy.get('input[name="first_name"]').type(objI.firstName)
            cy.get('input[name="last_name"]').type(objI.lastName)
            cy.get('input[name="email"]').type(objI.email)
            cy.get('textarea[name="message"]').type(objI.comments)
            cy.get('input[value="SUBMIT"]').click()
            cy.get('h1').should('have.text','Thank You for your Message!')
    })
    it.only('verify the contactus via fixture from import',function(){
        cy.log(users)
        // bad approach
        users.forEach(function(el){
            cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html')
            cy.get('input[name="first_name"]').type(el.firstName)
            cy.get('input[name="last_name"]').type(el.lastName)
            cy.get('input[name="email"]').type(el.email)
            cy.get('textarea[name="message"]').type(el.comments)
            cy.get('input[value="SUBMIT"]').click()
            cy.get('h1').should('have.text','Thank You for your Message!')

        })


    })

    users.forEach(function(el,index){

        it(`verify with mutiple data - ${index+1}`,function(){

            cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html')
            cy.get('input[name="first_name"]').type(el.firstName)
            cy.get('input[name="last_name"]').type(el.lastName)
            cy.get('input[name="email"]').type(el.email)
            cy.get('textarea[name="message"]').type(el.comments)
            cy.get('input[value="SUBMIT"]').click()
            cy.get('h1').should('have.text','Thank You for your Message!')


        })

    })








})