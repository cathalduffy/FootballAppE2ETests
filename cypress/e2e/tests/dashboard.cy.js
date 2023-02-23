/// <reference types="cypress" />
import {slowCypressDown} from 'cypress-slow-down'

const email = 'cathal@test.com'
const password = '123456'
const leagueDropdown = `//*[text()='Please select a league ']/child::select`
const yearDropdown = `//*[text()='Please select a year ']/child::select`


describe('Dashboard page tests', () => {
    beforeEach(() => {
      cy.visit('https://football-app-login.web.app/login')
      cy.login();
      cy.visit('https://football-app-login.web.app/dashboard')
    })
    it('Verify that team cards are visible to user', () => {  
        cy.xpath(`//*[text()='Arsenal']`)
        .should('have.text', 'Arsenal')
    })

    it('Verify that team images are visible to user', () => {   
        cy.xpath(`//*[text()='Arsenal']/parent::div/parent::div/following-sibling::div`)
        .should('be.visible')
    })
    it('Verify functionality of League dropdown menu', () => {   
        cy.xpath(`${leagueDropdown}`)
        .select('Championship')
        cy.xpath(`//*[text()='Burnley']`)
        .should('have.text', 'Burnley')
    })
    it('Verify functionality of Year dropdown menu', () => {   
      cy.xpath(`${yearDropdown}`)
      .select('2020')
      cy.xpath(`//*[text()='Manchester City']`)
      .should('have.text', 'Manchester City')
  })

    afterEach(() => {
      // cy.xpath(`//a[text()='Logout']`).click()
      // cy.clearCookies()
      indexedDB.deleteDatabase('firebaseLocalStorageDb');
      // cy.logout
    })

  })