describe('add product to cart', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('should be able navigate to product page and add product in cart', () => {
    cy.get('a[href^="/products"]').first().click()

    cy.url().should('include', '/products/')
    cy.contains('Adicionar ao carrinho').click()

    cy.contains('Cart (1)').should('exist')
  })

  it('when double-clicking the cart should continue on one', () => {
    cy.get('a[href^="/products"]').first().click()

    cy.url().should('include', '/products/')
    cy.contains('Adicionar ao carrinho').click()
    cy.contains('Adicionar ao carrinho').click()

    cy.contains('Cart (1)').should('exist')
  })

  it('the user must perform a search', () => {
    cy.get('input[name="q"]').type("moletom").parent('form').submit()

    cy.get('a[href^="/products"]').first().click()
    cy.url().should('include', '/products/')
    cy.contains('Adicionar ao carrinho').click()
    cy.contains('Cart (1)').should('exist')
  })
})