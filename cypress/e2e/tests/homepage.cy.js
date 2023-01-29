/// <reference types="cypress" />

describe('Homepage football app', () => {
    beforeEach(() => {
      cy.visit('https://football-app-login.web.app/')
    })

    it('Verify Homepage functionality', () => {    
        cy.get('#root > div > div > div > a').should('have.text', 'Get Started')
      })

  })
  