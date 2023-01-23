import renderWithProviders from "../../mocks/renderWithProviders";
import { screen } from "@testing-library/react";
import Header from "./Header";
import userEvent from "@testing-library/user-event";

const mockLogout = jest.fn();

jest.mock("../../hooks/useUser/useUser", () => {
  return () => ({
    userLogout: mockLogout,
  });
});

describe("Given a Header component", () => {
  describe("When it is rendered", () => {
    test("Then it should show a logo", () => {
      renderWithProviders(<Header />);

      const logo = screen.queryAllByLabelText("blueState");

      expect(logo).not.toBeNull();
    });
  });

  describe("When it is rendered and the logout button is clicked", () => {
    test("Then it should call the logout action", async () => {
      renderWithProviders(<Header />);

      const button = screen.queryByRole("button");
      await userEvent.click(button!);

      expect(mockLogout).toHaveBeenCalled();
    });
  });
});
