import { screen } from "@testing-library/react";
import Modal from "./Modal";
import renderWithProviders from "../../mocks/renderWithProviders";
import userEvent from "@testing-library/user-event";
import { store } from "../../redux/store";

describe("Given a Modal component", () => {
  describe("When it is rendered", () => {
    test("Then it should show a alert modal", () => {
      renderWithProviders(<Modal />);

      const modal = screen.queryByLabelText("alert");

      expect(modal).toBeInTheDocument();
    });
  });

  describe("When it is rendered and clicked", () => {
    test("Then it should dispatch the closeModalActionCreatior", async () => {
      renderWithProviders(<Modal />, {
        store: store,
      });

      const modal = screen.queryByRole("button", {
        name: "Close",
      });
      await userEvent.click(modal!);

      expect(modal).toBeInTheDocument();
    });
  });
});
