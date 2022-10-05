
///<reference types = "cypress"/>

describe('fileUpload option in cypress',function(){

    it('verify the file upload in cypress',function(){
        cy.visit('http://automationpractice.com/index.php?controller=contact')
        let youFile = 'macFree.txt';
        cy.get('#fileUpload').attachFile(youFile)
        cy.get('.filename').should('contain',youFile)

    })

    it('verify the file upload drag and drop in cypress',function(){
        cy.visit('https://css-tricks.com/examples/DragAndDropFileUploading/')
        let youFile = 'fileUpload.png';
        cy.get('#file').attachFile(youFile)
        cy.get('.box__success').should('contain.text','Done')

    })

    it('verify the file upload drag and drop in cypress',function(){
        cy.visit('https://css-tricks.com/examples/DragAndDropFileUploading/')
        let youFile = 'fileUpload.png';
        cy.get('#file').attachFile(youFile)
        cy.get('.box__success').should('contain.text','Done')

    })

    it('verify the multiple file upload',function(){
        cy.visit('https://davidwalsh.name/demo/multiple-file-upload.php')
        let youFile = 'fileUpload.png';
        let youFile2 = 'macFree.txt';
        let youFile3 = 'example.json'
        cy.get('#filesToUpload')
        .attachFile([youFile,youFile2,youFile3])
        // .attachFile(youFile2)
        // .attachFile(youFile3)
        cy.get('#fileList').children().should('have.length',3)
       
    })

    it.only('verify fileName change while uploading',function(){
        cy.visit('https://davidwalsh.name/demo/multiple-file-upload.php')
        let youFile = 'fileUpload.png';
        cy.get('#filesToUpload')
        .attachFile({ filePath:youFile, fileName: 'customFileName.png'})
        cy.get('#fileList').children().first().should('contain.text','customFileName')
        cy.get('#fileList').children().should('have.length',1)
       
    })

})