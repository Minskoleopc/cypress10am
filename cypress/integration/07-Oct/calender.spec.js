///<reference types = "cypress"/>

describe('verify the date selection in cypress', function () {


    it('verify the date selection in cypress', function () {

        // practice 1
        //let date = new Date()
        // properties and
        // let year = date.getFullYear()
        // let month = date.getMonth()
        // let dayDate = date.getDate()
        // cy.log(year)
        // cy.log(month)
        // cy.log(dayDate)

        // practice 2
        let date2 = new Date()
        date2.setDate(date2.getDate() + 200)

        let year = date2.getFullYear()
        let month = date2.toLocaleString("default", { month: "long" })
        let daydate = date2.getDate()

        cy.log(year)
        cy.log(month)
        cy.log(daydate)

        cy.visit('https://webdriveruniversity.com/Datepicker/index.html')
        cy.get('#datepicker').click()

        // select Year 
        // select month 
        // select date 

        function SelectMonthAndYear(){
            cy.get('.datepicker-switch').first().then(function($el){
                //cy.log($el.text())
                if(!$el.text().includes(year)){
                    cy.get('.next').first().click()
                    SelectMonthAndYear()
                }
            })

            cy.get('.datepicker-switch').first().then(function($el){
                //cy.log($el.text())
                if(!$el.text().includes(month)){
                    cy.get('.next').first().click()
                    SelectMonthAndYear()
                }
            })

        }

        SelectMonthAndYear()

        function selectDate(){
            cy.contains(daydate).click()
        }

        selectDate()


    })


})