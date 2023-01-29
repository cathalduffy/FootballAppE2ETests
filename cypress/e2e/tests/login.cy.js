/// <reference types="cypress" />
import {slowCypressDown} from 'cypress-slow-down'

const email = 'cathal@test.com'
const password = '123456'


describe('Login football app', () => {
    beforeEach(() => {
      cy.visit('https://football-app-login.web.app/login')
    })
    it('Successfully log in with valid username and password', () => {   
      cy.get('#root > div > div > div.card-body > div:nth-child(1) > input').type(`${email}`)
      cy.get('#root > div > div > div.card-body > div:nth-child(2) > input').type(`${password}`)
      cy.xpath(`//button[text()='Login']`).click()
      cy.xpath(`//h3[text()='Teams Dashboard']`)
      cy.xpath(`//a[text()='Logout']`).click()
      cy.get('#root > div > div > div > a').should('have.text', 'Get Started')
    })

      it('Verify login unsuccessful when valid username and invalid password', () => {   
        cy.get('#root > div > div > div.card-body > div:nth-child(1) > input').type(`${email}`)
        cy.get('#root > div > div > div.card-body > div:nth-child(2) > input').type('fakepassword')
        cy.xpath(`//button[text()='Login']`).click()
      })

      it('Verify login unsuccessful when no username and no password', () => {   
        cy.get('#root > div > div > div.card-body > div:nth-child(1) > input').type(' ')
        cy.get('#root > div > div > div.card-body > div:nth-child(2) > input').type('111')
        cy.xpath(`//button[text()='Login']`).click()
      })
    afterEach(() => {
      cy.clearCookies()
    })

  })
  