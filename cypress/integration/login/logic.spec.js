import {Login} from "../pages/login"

describe('verify Login functionality',function(){
    let login = new Login()
    it('verify with valid credentials',function(){
        login.navigate()
        login.validLogin("standard_user","secret_sauce")
   
    })

    it('verify with invalid credentials',function(){
        login.navigate()
        login.invalidLogin("dsa","dasd")
   
    })

    it('valid logo on homePage',function(){
        login.navigate()
        login.validateLog()
   
    })

})
