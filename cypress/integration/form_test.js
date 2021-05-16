// - [x] test that you can add text to the box
// - [x] test that you can select multiple toppings
// - [ ] test that you can submit the form

describe('test website', () =>{
    it('can navigate to the website', () =>{
        cy.visit('http://localhost:3000')
    })
    it('can navigate to the form', () => {
        cy.visit('http://localhost:3000/pizza')
    })
})

describe('Single page applications sprint challenge testing', () =>{
    const nameInput = () => cy.get('[name="name"]')
    const selectSize = () => cy.get('#size-dropdown')
    const toppingsCheck = () => cy.get('[type="checkbox"]')
    const specialInput = () => cy.get('[name="special"]')
    const orderButton = () => cy.get('#order-button')

    it('can add text to the box', () =>{
        const customerName = 'Grace Pappas'
        nameInput().type(customerName).should('have.value', customerName)
    })

    it('can select a size', () => {
        selectSize().select('large')
    })
    
    it('can select multiple toppings', () => {
        toppingsCheck().check()
    })

    it('can add text to the special instructions', () =>{
        const specialOrder = 'Extra crispy crust'
        specialInput().type(specialOrder).should('have.value', specialOrder)
    })

    it('can submit the form', () => {
        orderButton().should('not.be.disabled')
    })
})