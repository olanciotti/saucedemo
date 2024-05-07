/// <reference types="cypress" />

import Login from "../support/pages/login";
import Sidebar from "../support/pages/sidebar";
import assertInventory from "../support/assertPages/assertInventory";
import inventory from "../support/pages/inventory";

describe('Inventory - Grid of products', () => {
  
  beforeEach(() => {
    cy.window().then((win) => {
      win.sessionStorage.clear()
    })
  })

  afterEach(() => {
    localStorage.clear();
  })

  it('Should check that Inventory page is displayed successfully', () => {
    cy.visit(Cypress.env("baseUrl"));
    Login.completeUsername(Cypress.env("standardUser"));
    Login.completePassword(Cypress.env("password"));
    Login.clickLogin();
    assertInventory.checkProductTitleVisible();
    assertInventory.checkItemsNumber('6');
  })

  //FEATURE-2-TC-3
  it('Should check that the card Sauce Labs Backpack is displayed successfully', () => {
    cy.visit(Cypress.env("baseUrl"));
    Login.completeUsername(Cypress.env("standardUser"));
    Login.completePassword(Cypress.env("password"));
    Login.clickLogin();
    assertInventory.checkSauceLabsBackpackItemContent();
  })

  //FEATURE-2-TC-1
  it('Should check that items are order by Price Low to High', () => {
    cy.visit(Cypress.env("baseUrl"));
    Login.completeUsername(Cypress.env("standardUser"));
    Login.completePassword(Cypress.env("password"));
    Login.clickLogin();
    inventory.orderByPriceLowToHigh();
    assertInventory.checkPriceIsSortLowToHigh();
  })

  //FEATURE-2-TC-2
  it('Should check that items are order by Price High to Low', () => {
    cy.visit(Cypress.env("baseUrl"));
    Login.completeUsername(Cypress.env("standardUser"));
    Login.completePassword(Cypress.env("password"));
    Login.clickLogin();
    inventory.orderByPriceHighToLow();
    assertInventory.checkPriceIsSortHighToLow();
  })
})