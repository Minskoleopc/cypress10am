///<reference types = "cypress"/>

describe('verify the localstorage for app',function(){

    this.beforeEach(function(){
        cy.visit('https://webdriveruniversity.com/')
    })


    it('Local storage using window',function(){
        cy.window().then(function(win){
           // console.log(win.localStorage)
           expect(win.localStorage.length).to.eq(0)
           window.localStorage.setItem('id',1)
           expect(win.localStorage.length).to.eq(1)
           expect(window.localStorage.getItem('id')).to.eq('1')

        })

    })

    it('Clearing the local storage using cypress command',function(){
       cy.clearLocalStorage()
       cy.window().then(function(win){
        expect(win.localStorage.length).to.eq(0) 
       })

    })

    it('Clearing the local storage using cypress command',function(){
        cy.clearLocalStorage()
        cy.window().then(function(win){
         expect(win.localStorage.length).to.eq(0) 
        })
 
     })

     // Document 
     it('Verify the title of the page',function(){
        cy.document().should(function(doc){
            let titleText = doc.title
            expect(titleText).to.eq('WebDriverUniversity.com')
        })

     })

     it.only('Verify the title with cypress command',function(){
         cy.title().should('eq','WebDriverUniversity.com')
     })


     it.only('Verify the title with cypress command',function(){
        cy.title().then(function(txt){
            expect(txt).to.eq('WebDriverUniversity.com')
        })
    })


    it.only('Verify the title with cypress command',function(){
        // set 
        cy.setCookie('username','amol')
        // get
        cy.getCookie('username')
        //  update 
        cy.setCookie('username',"chinmay")
        //get
        cy.getCookie('username')
        //adding another cookie
        cy.get('password','123')
        // clearing cookie
        cy.clearCookie('password')
        // clearing all cookies
        cy.clearCookies()
    })


     // cypress --- async 
     // execute --- promises ---sync
     // cy------> js






     // API ----- username and password 
     // token --------  localstorage
     // Dashboard

    //  username
    //  password -- click --- api --- response token --- local

})