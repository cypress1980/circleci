/// <reference types="cypress" />

describe("Test login funcationlity ", () => {
  it("Open URL", () => {
    //cy.visit("./.");
    cy.visit(Cypress.env("login_url"));
  });
  it("Login Into Application", () => {
    cy.get("#ctl00_CPHContainer_txtUserLogin").type("kailash1980");
    cy.get("#ctl00_CPHContainer_txtPassword").type("Sonie8088");
    cy.get("#ctl00_CPHContainer_btnLoginn").click();
  });
  it("Logout From Application", () => {
    cy.get("#ctl00_headerTopStudent_lnkbtnSignout").click();
  });
});
//"projectId": "7ug3wr"
// 9e44b038-201e-4d29-b5a2-e71644641eb2
