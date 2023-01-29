/// <reference types="cypress" />
import {slowCypressDown} from 'cypress-slow-down'

const email = 'cathal@test.com'
const password = '123456'
const leagueDropdown = `//*[text()='Please select a league ']/child::select`
const yearDropdown = `//*[text()='Please select a year ']/child::select`


describe('Standings page tests', () => {
    beforeEach(() => {
      cy.visit('https://football-app-login.web.app/login')
      cy.get('#root > div > div > div.card-body > div:nth-child(1) > input').type(`${email}`)
      cy.get('#root > div > div > div.card-body > div:nth-child(2) > input').type(`${password}`)
      cy.xpath(`//button[text()='Login']`).click()
    })
    it('Verify that standings table is visible', () => { 
        // cy.xpath(`//*[text()='Arsenal']`)
        // .should('have.text', 'Arsenal')
        cy.xpath(`//a[text()='Standings']`).click()
        cy.wait(5000)
        cy.xpath(`//*[text()='Newcastle']`)
        .should('have.text', 'Newcastle')
    })

    it('Verify that standings data is displayed to the user', () => {   
        cy.xpath(`//a[text()='Standings']`).click()
        cy.get('#root > div > div.MuiGrid-root.MuiGrid-container.MuiGrid-spacing-xs-1.MuiGrid-item.MuiGrid-grid-xs-7 > div > table > tbody:nth-child(2) > tr')
        .children()
        .should('contain', '1')
        .and('contain', 'Arsenal')
        .and('contain', '19')
        .and('contain', '45')
        .and('contain', '16')
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
    it('Verify that user can access a team details page when clicking on team from the table', () => {   

    })

    afterEach(() => {
      cy.xpath(`//a[text()='Logout']`).click()
      cy.clearCookies()
    })

  })