describe('Check the Add product to cart feature and Cart page', () => {
  it('Verify that user can add product to cart', () => {
    cy.visit('https://www.harveynorman.com.au/google-nest-cam-outdoor-indoor-battery-1-pack.html')
    cy.get('[data-testid="add-to-cart"]').click()
    cy.get('.PageHeaderCart_sf-page-header-cart-count__6ipMs').should('contain', '1')
    cy.get('.PageHeaderCart_sf-page-header-cart-count__6ipMs').click()
    cy.contains('button', 'continue').click()
    cy.get('[data-ui-id="page-title-wrapper"]').should('contains', 'Shopping Cart')
    cy.get('a[href="https://www.harveynorman.com.au/google-nest-cam-outdoor-or-indoor-battery-1-pack.html"]').should('contains', 'Google Nest Cam (Outdoor or Indoor, Battery) - 1 Pack')
    cy.get('#cart-9749192-qty').should('have.value', '1')
  })

  it('Verify that user can select delivery method', () => {
    cy.get('#atlas_pickup').click()
    cy.get('.action apply primary btn-select-store"').should('contain', 'SELECT STORE')
    cy.get('#id="atlas_standard').click()
    cy.get('#btn-apply').should('contain', 'CALCULATE DELIVERY')
    cy.get('#atlas_standard_suburb-postcode-txt').click()
    cy.get('#atlas_standard_suburb-postcode-txt').type('MASCOT 2020 NSW')
    cy.get('#atlas_standard_suburb-postcode-txt').type('{downarrow}')
    cy.get('#atlas_standard_suburb-postcode-txt').type('{enter}')
    cy.get('#atlas_standard_selected_postcode_ctr').should('contain', 'Delivery charge to')
    cy.get('.delivery-postcode').should('contain', 'MASCOT 2020, NSW')
    cy.get('.label').should('contain','Standard')
    cy.get('.price').should('contain','$7.95')
  })

  it('Verify the Total Price on the Cart Page', () => {
    cy.get('.mark').should('contain', 'Total amount')
    cy.get('[data-th="Subtotal"]').should('contain', '$335.95')
    cy.get('[data-bind="text: getGstTittle()"]').should('contain','Incl GST')
    cy.get('[data-bind="text: getValue()"]').should('contain', '$30.54')
    
  })
  
})