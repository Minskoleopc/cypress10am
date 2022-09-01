///<reference types = "cypress"/>
describe('Verify the drop down list',function(){

    it('verify the drop-down one',function(){

        // Arrange
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        // Action 
        cy.get('input[name="username"]').type('Admin')
        cy.get('input[name="password"]').type('admin123')
        cy.get('button[type="submit"]').click()
        // Assert
        cy.get('img[alt="client brand banner"]').should('be.visible')
        
    })

    
    it('verify the drop-down one',function(){
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        // Action 
        cy.get('input[name="username"]').type('Admin')
        cy.get('input[name="password"]').type('admin123')
        // cy.contains('Login')
        cy.contains('button','Login').click()
        //*info*
        //cy.get('button[type="submit"]').click()
        // second way to find the element
        //<button id = "one" class ="two" type="submit" class="oxd-button oxd-button--medium oxd-button--main orangehrm-login-button" data-v-7e88b27e="" data-v-30b9e6c4=""><!----> Login <!----></button>
        //cy.get('button') // tagName
        //cy.get('#one')
        //cy.get('.two')
        //cy.get(button[type = "text"])
        //cy.contains('Login')

        // Assert
        cy.get('img[alt="client brand banner"]').should('be.visible')
        
    })

        
    it.only('verify the drop-down one',function(){
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.get('input[name="username"]').type('Admin')
        cy.get('input[name="password"]').type('admin123')
        cy.contains('button','Login').click()
        //cy.get('img[alt="client brand banner"]').should('be.visible')

        // Implicit assertion -- element 
        cy.contains('Employee Information').should('be.visible')
        cy.get('h5[class]')
        .should('be.visible')
        .and('have.text','Employee Information')
        // actual vs expected
        // explicit assertion
        cy.get('h5[class]').then(function(el){
            expect(el.text()).to.equal('Employee Information');
        })
        
    })

    it('verify the  mutiple check box with checked() by passing array parameter', function () {
        cy.visit('https://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html')
        cy.get('input[type=checkbox]').check(['option-1','option-2','option-3','option-4'])

    })

    it('verify the functionality of select drop down', function () {
        cy.visit('https://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html')
        cy.get('input[type=checkbox]').check(['option-1','option-2','option-3','option-4'])

    })

    it.only('verify the select functionality via text', function () {
        cy.visit('https://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html')
        cy.get('#dropdowm-menu-1').select('Python').should('have.value','python')

    })

    it.only('verify the select functionality via value attribute', function () {
        cy.visit('https://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html')
        cy.get('#dropdowm-menu-1').select('python').should('contain','Python')

    })




















})