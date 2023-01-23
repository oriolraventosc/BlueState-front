import renderWithProviders from "../../mocks/renderWithProviders";
import { screen } from "@testing-library/react";
import React from "react";
import UpdateContactPage from "./UpdateContactPage";

describe("Given a UpdateContactPage component", () => {
  describe("When it is rendered", () => {
    test("Then it should show a heading level title 1 with the text 'Update contact'", () => {
      renderWithProviders(<UpdateContactPage />);

      const expectedTitle = screen.queryByRole("heading", {
        level: 1,
        name: "add-new-contact",
      }) as HTMLElement;

      expect(expectedTitle).toBeInTheDocument();
    });

    test("Then it should show 8 inputs", () => {
      renderWithProviders(<UpdateContactPage />);

      const name = screen.queryByRole("textbox", {
        name: "Name",
      });
      const email = screen.queryByRole("textbox", {
        name: "Email",
      });
      const telephone = screen.queryByLabelText("telephone");
      const sector = screen.queryByRole("textbox", {
        name: "Sector",
      });
      const service = screen.queryByRole("textbox", {
        name: "Service",
      });
      const website = screen.queryByRole("textbox", {
        name: "Website",
      });

      expect(name).toBeInTheDocument();
      expect(email).toBeInTheDocument();
      expect(telephone).toBeInTheDocument();
      expect(sector).toBeInTheDocument();
      expect(service).toBeInTheDocument();
      expect(website).toBeInTheDocument();
    });
  });
});
