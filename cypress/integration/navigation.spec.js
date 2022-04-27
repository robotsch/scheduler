describe("Navigation", () => {
  it("should visit root", () => {
    cy.visit("/")
  })
  
  it("should navigate to Tuesday", () => {
    cy.contains("li", "Tuesday", "[data-testid=day")
      .click()
      .should("have.class", "day-list__item--selected")
  });
});