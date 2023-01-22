/// <reference types="cypress" />
import {slowCypressDown} from 'cypress-slow-down'


describe('Register football app', () => {
    beforeEach(() => {
      cy.visit('https://football-app-login.web.app/register')
    })
    it('Successfully register an account', () => {   
    const email = '123@test.com'
    const password = '123456'

      cy.xpath(`//*[text()='Email']/parent::label/following-sibling::input`).type(`${email}`)
      cy.xpath(`//*[text()='Password']/parent::label/following-sibling::input`).type(`${password}`)
      cy.xpath(`//button[text()='Register']`).click()
      cy.clearCookies()
      
      cy.visit('https://football-app-login.web.app/login')
      cy.get('#root > div > div > div.card-body > div:nth-child(1) > input').type(`${email}`)
      cy.get('#root > div > div > div.card-body > div:nth-child(2) > input').type(`${password}`)
      cy.xpath(`//button[text()='Login']`).click()
      cy.xpath(`//h3[text()='Teams Dashboard']`)
    })
    afterEach(() => {
      cy.clearCookies()
    })

  })