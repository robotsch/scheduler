describe("Appointment", () => {
  beforeEach(() => {
    cy.request("GET", "/api/debug/reset");
    cy.visit("/");
    cy.contains("Monday");
  });

  it("should book an appointment", () => {
    cy.request("GET", "/api/debug/reset");
    cy.contains("Tuesday");
    cy.get("[alt=Add]").first().click();
    cy.get("[data-testid=student-name-input").type("Lydia Miller-Jones");
    cy.get("[alt='Sylvia Palmer']").click();
    cy.contains("Save").click();
    cy.contains(".appointment__card--show", "Lydia Miller-Jones");
    cy.contains(".appointment__card--show", "Sylvia Palmer");
  });

  it("should edit an appointment", () => {
    cy.contains("Archie Cohen");
    cy.get("[alt='Edit']").click({ force: true });
    cy.get("[alt='Tori Malcolm']").click();
    cy.contains("Save").click();
    cy.contains(".appointment__card--show", "Archie Cohen");
    cy.contains(".appointment__card--show", "Tori Malcolm");
  });

  it("should cancel an appointment", () => {
    cy.contains("Archie Cohen");
    cy.get("[alt='Delete']").click({ force: true });
    cy.contains("Confirm").click();
    cy.contains(".appointment__card--show", "Archie Cohen")
      .should("not.exist")
  });
});
