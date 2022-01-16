// https://docs.cypress.io/api/introduction/api.html

describe("Integration test", () => {
  const dummyArray = [1, 2, 3];

  it("Visits the app root url", () => {
    cy.visit("/");
  });

  it("Add some products to wishlist", () => {
    dummyArray.forEach((id) => {
      cy.get(`:nth-child(${id}) > .card-container-checkbox`).click();
    });
  });

  it("Change to wishlist page", () => {
    cy.get(".header-container-wrapper-items > :nth-child(3)").click();
    cy.url().should("include", "/wishlist");
  });

  it("Remove some products from wishlist", () => {
    dummyArray.forEach((id) => {
      cy.get(`:nth-child(${id}) > .card-button-close`).click();
    });
  });

  it("Check if empty message exists", () => {
    cy.get("h3").should("be.visible");
  });

  it("Go back to home by breadcrumb", () => {
    cy.get(
      ".wishlist-breadcrumb > :nth-child(1) > .router-link-active"
    ).click();
    cy.url().should("include", "/");
  });
});
