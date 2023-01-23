import NotFoundPage from "./NotFoundPage";
import renderWithProviders from "../../mocks/renderWithProviders";
import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

const mockedUsedNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  ...(jest.requireActual("react-router-dom") as any),
  useNavigate: () => mockedUsedNavigate,
}));

describe("Given a NotFoundPage component", () => {
  describe("When it is rendered", () => {
    test("Then it should show a heading level title 1 with the text 'Oh no!'", () => {
      renderWithProviders(<NotFoundPage />);

      const h1 = screen.queryByRole("heading", {
        level: 1,
      });

      expect(h1).toBeInTheDocument();
    });

    test("Then it should show a heading level title 2 with the text 'The page you are looking for does not exist'", () => {
      renderWithProviders(<NotFoundPage />);

      const h2 = screen.queryByRole("heading", {
        level: 2,
      });

      expect(h2).toBeInTheDocument();
    });

    test("Then it shoud show a paragraph with the text 'Go back to'", () => {
      renderWithProviders(<NotFoundPage />);

      const paragraph = screen.queryByText("Go back to");

      expect(paragraph).toBeInTheDocument();
    });

    test("Then it should show a button with the text 'CONTACTS'", () => {
      renderWithProviders(<NotFoundPage />);

      const button = screen.queryByRole("button", {
        name: "CONTACTS",
      });

      expect(button).toBeInTheDocument();
    });

    test("Then it should call an action when the button is clicked", async () => {
      renderWithProviders(<NotFoundPage />);

      const button = screen.queryByRole("button", {
        name: "CONTACTS",
      }) as HTMLElement;

      await userEvent.click(button);

      expect(mockedUsedNavigate).toHaveBeenCalled();
    });
  });
});
