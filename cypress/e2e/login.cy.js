/// <reference types="cypress" />

import Login from "../support/pages/login";
import assertCommonComponents from "../support/assertPages/assertCommonComponents";
import assertLogin from "../support/assertPages/assertLogin";
import assertInventory from "../support/assertPages/assertInventory";

describe("Login - Sucess Login", () => {
  
  beforeEach(() => {
    cy.window().then((win) => {
      win.sessionStorage.clear()
    })
  })

  afterEach(() => {
    localStorage.clear()
  })

  it("should login to the app as Standard user", () => {
    cy.visit(Cypress.env("baseUrl"));
    assertLogin.checkSwagLabsLogoIsVisible();
    Login.completeUsername(Cypress.env("standardUser"));
    Login.completePassword(Cypress.env("password"));
    Login.clickLogin();
    assertCommonComponents.checkSwagLabsLogoIsVisible();
    assertInventory.checkProductTitleVisible();
  });
});

describe("Login - Invalid Login", () => {

  beforeEach(() => {
    cy.window().then((win) => {
      win.sessionStorage.clear()
    })
  })

  afterEach(() => {
    localStorage.clear()
  })

  it("should not be able to login without entering username and password", () => {
    cy.visit(Cypress.env("baseUrl"));
    assertLogin.checkSwagLabsLogoIsVisible();
    Login.clickLogin();
    assertLogin.checkUsernameError();
    assertLogin.checkPasswordError();
    assertLogin.checkErrorMessageDisplays("Epic sadface: Username is required");
  });

  it("should not be able to login without enter password", () => {
    cy.visit(Cypress.env("baseUrl"));
    assertLogin.checkSwagLabsLogoIsVisible();
    Login.completeUsername(Cypress.env("standardUser"));
    Login.clickLogin();
    assertLogin.checkPasswordError();
    assertLogin.checkErrorMessageDisplays("Epic sadface: Password is required");
  });

  it("should not be able to login without enter username", () => {
    cy.visit(Cypress.env("baseUrl"));
    assertLogin.checkSwagLabsLogoIsVisible();
    Login.completePassword(Cypress.env("password"));
    Login.clickLogin();
    assertLogin.checkUsernameError();
    assertLogin.checkErrorMessageDisplays("Epic sadface: Username is required");
  });
});
