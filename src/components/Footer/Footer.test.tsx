import Footer from "./Footer";
import renderWithProviders from "../../mocks/renderWithProviders";
import { screen } from "@testing-library/react";

describe("Given a Footer component", () => {
  describe("When it is rendered", () => {
    test("Then it should show a text 'BlueState'", () => {
      renderWithProviders(<Footer />);

      const title = screen.getByText("BlueState");

      expect(title).toBeInTheDocument();
    });

    test("Then it should show a text 'Made by'", () => {
      renderWithProviders(<Footer />);

      const text = screen.getByText("Made by");

      expect(text).toBeInTheDocument();
    });

    test("Then it should show a text 'ORIOL RAVENTÓS", () => {
      renderWithProviders(<Footer />);

      const text = screen.getByText("ORIOL RAVENTÓS");

      expect(text).toBeInTheDocument();
    });
  });
});
