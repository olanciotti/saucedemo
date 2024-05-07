/// <reference types="cypress" />

import Login from "../support/pages/login";
import assertLogin from "../support/assertPages/assertLogin";
import assertCommonComponents from "../support/assertPages/assertCommonComponents";
import assertInventory from "../support/assertPages/assertInventory";
import Sidebar from "../support/pages/sidebar";
import assertSidebar from "../support/assertPages/assertSidebar";

describe('Sidebar - User interactions', () => {
  
    beforeEach(() => {
      cy.window().then((win) => {
        win.sessionStorage.clear()
      })
    })
  
    afterEach(() => {
      localStorage.clear()
    })
   
    //FEATURE-3-TC-1
    it('Should check that Log out button logs the current user out', () => {
        cy.visit(Cypress.env("baseUrl"));
        Login.completeUsername(Cypress.env("standardUser"));
        Login.completePassword(Cypress.env("password"));
        Login.clickLogin();
        assertCommonComponents.checkSwagLabsLogoIsVisible();
        assertInventory.checkProductTitleVisible();
        Sidebar.clickBurgerMenuButton();
        assertSidebar.checkLogoutButtonIsVisible();
        Sidebar.clickLogoutButton();
        assertCommonComponents.checkUrlContent(Cypress.env("baseUrl"));
        assertLogin.checkSwagLabsLogoIsVisible();
        assertLogin.checkLoginFormIsVisible();
    })
})