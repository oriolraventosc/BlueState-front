import renderWithProviders from "../../mocks/renderWithProviders";
import ContactsList from "./ContactsList";
import { screen } from "@testing-library/react";

describe("Given a ContactsList component", () => {
  describe("When it is rendered", () => {
    test("Then it should show 7 rows", () => {
      renderWithProviders(<ContactsList />);

      const name = screen.getByText("Name");
      const website = screen.getByText("Website");
      const email = screen.getByText("Email");
      const telephone = screen.getByText("Telephone");
      const service = screen.getByText("Service");
      const contacted = screen.getByText("Contacted");

      expect(name).toBeInTheDocument();
      expect(website).toBeInTheDocument();
      expect(email).toBeInTheDocument();
      expect(telephone).toBeInTheDocument();
      expect(service).toBeInTheDocument();
      expect(contacted).toBeInTheDocument();
    });
  });
});
