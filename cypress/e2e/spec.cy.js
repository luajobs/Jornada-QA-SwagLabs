describe('template spec', () => {
  it('Login Válido', () => {
    cy.visit('https://www.saucedemo.com/v1/')
    cy.get('[data-test="username"]').type('standard_user')
    cy.get('[data-test="password"]').type('secret_sauce')
    cy.get('#login-button').click()
    cy.get('.product_label').contains("Products")
  })

  it('Login inválido', () => {
    cy.visit('https://www.saucedemo.com/v1/')
    cy.get('[data-test="username"]').type('moon_user')
    cy.get('[data-test="password"]').type('secret_sauce')
    cy.get('#login-button').click()
    

  })
})