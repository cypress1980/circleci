/// <reference types="cypress" />

context("Actions", () => {
  beforeEach(() => {
    cy.visit("https://example.cypress.io/commands/actions");
  });

  it(".focus() - focus on a DOM element", () => {
    // https://on.cypress.io/focus
    cy.get(".action-focus")
      .focus()
      .should("have.class", "focus")
      .prev()
      .should("have.attr", "style", "color: orange;");
  });

  it(".blur() - blur off a DOM element", () => {
    // https://on.cypress.io/blur
    cy.get(".action-blur")
      .type("About to blur")
      .blur()
      .should("have.class", "error")
      .prev()
      .should("have.attr", "style", "color: red;");
  });

  it(".clear() - clears an input or textarea element", () => {
    // https://on.cypress.io/clear
    cy.get(".action-clear")
      .type("Clear this text")
      .should("have.value", "Clear this text")
      .clear()
      .should("have.value", "");
  });

  it(".submit() - submit a form", () => {
    // https://on.cypress.io/submit
    cy.get(".action-form").find('[type="text"]').type("HALFOFF");

    cy.get(".action-form")
      .submit()
      .next()
      .should("contain", "Your form has been submitted!");
  });
  it(".dblclick() - double click on a DOM element", () => {
    // https://on.cypress.io/dblclick

    // Our app has a listener on 'dblclick' event in our 'scripts.js'
    // that hides the div and shows an input on double click
    cy.get(".action-div").dblclick().should("not.be.visible");
    cy.get(".action-input-hidden").should("be.visible");
  });

  it(".rightclick() - right click on a DOM element", () => {
    // https://on.cypress.io/rightclick

    // Our app has a listener on 'contextmenu' event in our 'scripts.js'
    // that hides the div and shows an input on right click
    cy.get(".rightclick-action-div").rightclick().should("not.be.visible");
    cy.get(".rightclick-action-input-hidden").should("be.visible");
  });
  it(".trigger() - trigger an event on a DOM element", () => {
    // https://on.cypress.io/trigger

    // To interact with a range input (slider)
    // we need to set its value & trigger the
    // event to signal it changed

    // Here, we invoke jQuery's val() method to set
    // the value and trigger the 'change' event
    cy.get(".trigger-input-range")
      .invoke("val", 25)
      .trigger("change")
      .get("input[type=range]")
      .siblings("p")
      .should("have.text", "25");
  });

  it("cy.scrollTo() - scroll the window or element to a position", () => {
    // https://on.cypress.io/scrollto

    // You can scroll to 9 specific positions of an element:
    //  -----------------------------------
    // | topLeft        top       topRight |
    // |                                   |
    // |                                   |
    // |                                   |
    // | left          center        right |
    // |                                   |
    // |                                   |
    // |                                   |
    // | bottomLeft   bottom   bottomRight |
    //  -----------------------------------

    // if you chain .scrollTo() off of cy, we will
    // scroll the entire window
    cy.scrollTo("bottom");

    cy.get("#scrollable-horizontal").scrollTo("right");

    // or you can scroll to a specific coordinate:
    // (x axis, y axis) in pixels
    cy.get("#scrollable-vertical").scrollTo(250, 250);

    // or you can scroll to a specific percentage
    // of the (width, height) of the element
    cy.get("#scrollable-both").scrollTo("75%", "25%");

    // control the easing of the scroll (default is 'swing')
    cy.get("#scrollable-vertical").scrollTo("center", { easing: "linear" });

    // control the duration of the scroll (in ms)
    cy.get("#scrollable-both").scrollTo("center", { duration: 2000 });
  });
});
