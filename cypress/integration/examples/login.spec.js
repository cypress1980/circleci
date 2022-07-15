/// <reference types="cypress" />

describe("Test login funcationlity : login into  the application and logout ", () => {
  it("Open URL", () => {
    cy.visit("https://bstackdemo.com/");
  });
  it("Verify links in Browser Stack Home Page ", () => {
    cy.contains("Offers");
    cy.contains("Orders");
    cy.contains("Favourites");
  });
  it("Verify Phone Modle in Home Page ", () => {
    cy.contains("iPhone 12");
    cy.contains("Pixel 2");
    cy.contains("One Plus 8");
    cy.contains("One Plus 6T");
  });
});
