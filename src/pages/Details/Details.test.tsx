import renderWithProviders from "../../mocks/renderWithProviders";
import { screen } from "@testing-library/react";
import Details from "./Details";

describe("Given a Details page component", () => {
  describe("When it is rendered", () => {
    test("Then it should show a heading level title and a button with the text delete", () => {
      renderWithProviders(<Details />);

      const title = screen.queryByRole("heading", {
        level: 1,
      });
      const button = screen.queryByRole("button", {
        name: "DELETE",
      });

      expect(button).toBeInTheDocument();
      expect(title).toBeInTheDocument();
    });

    test("Then it should show an image", () => {
      renderWithProviders(<Details />);

      const logo = screen.queryByRole("img");

      expect(logo).toBeInTheDocument();
    });

    test("Then it should show the text 'Business details' and a button 'Edit'", () => {
      renderWithProviders(<Details />);

      const button = screen.queryByRole("button", {
        name: "Edit",
      });

      expect(button).toBeInTheDocument();
    });

    test("Then it should show the business email, website, sector, service, telephone", () => {
      renderWithProviders(<Details />);
      const containerWithContactData = screen.getByLabelText("card-body-data");

      expect(containerWithContactData).toBeInTheDocument();
    });
  });
});
