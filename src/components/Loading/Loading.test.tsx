import Loading from "./Loading";
import { screen } from "@testing-library/react";
import renderWithProviders from "../../mocks/renderWithProviders";

describe("Given a Loading component", () => {
  describe("When it is rendered", () => {
    test("Then it should show animated circular bars", () => {
      renderWithProviders(<Loading />);

      const loading = screen.getByLabelText("loader");

      expect(loading).toBeInTheDocument();
    });
  });
});
