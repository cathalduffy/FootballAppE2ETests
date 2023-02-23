/// <reference types="cypress" />
import {getLoginButton, getTitle} from 'cypress-slow-down'


const authUser = require('/Users/cathalduffy/Desktop/FootballAppE2ETests/cypress/fixtures/auth-user.json');
require('/Users/cathalduffy/Desktop/FootballAppE2ETests/cypress/support/commands.js')

const email = 'test@test.com'
const password = '123456'
const leagueDropdown = `//*[text()='Please select a league ']/child::select`
const yearDropdown = `//*[text()='Please select a year ']/child::select`


// describe('API tests', () => {
//     const {email, password} = authUser;
//     it('Verify that team cards are visible to user', () => {  
//     // cy.visit('https://football-app-login.web.app/login');
//     cy.login(email, password);
//     cy.contains(email).should('exist');
// })
// }),


describe('Testing Firebase Authentication API', () => {

  // it('Test GET Request', () => {
  //       cy.request
  //         ({
  //           method: 'GET',
  //           url: 'https://v3.football.api-sports.io/standings/?season=2021&league=39',
  //           headers: {
  //             'X-RapidAPI-Key': process.env.XRAPIDAPIKEY,
  //             'X-RapidAPI-Host': process.env.XRAPIDAPIHOST
  //           }
  //         })
  //            .then((response) => {
  //             cy.log(JSON.stringify(response.body))
  //             expect(response.status).to.eq(200)
  //           })
  // })

  it('Test Firebase Valid Email', () => {
    const {email} = authUser;
    cy.login();
  });

})