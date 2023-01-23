describe("Given a login page", () => {
  describe("When the user types 'admin' as the username and password", () => {
    it("passes", () => {
      cy.visit("/");
      cy.findByRole("textbox", { name: "Username" }).type("admin");
      cy.findByLabelText("password").type("admin");
      cy.findByRole("button").click();

      cy.url().should("include", "/contacts");
    });
  });
});
