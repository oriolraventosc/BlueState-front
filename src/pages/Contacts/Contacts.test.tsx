import renderWithProviders from "../../mocks/renderWithProviders";
import { screen } from "@testing-library/react";
import Contacts from "./Contacts";
import userEvent from "@testing-library/user-event";

const mockedUsedNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  ...(jest.requireActual("react-router-dom") as any),
  useNavigate: () => mockedUsedNavigate,
}));

describe("Given a Contacts component", () => {
  describe("When it is rendered", () => {
    test("Then it should show a heading level 1 title with the text 'Contacts' and a button with the text 'New contact'", () => {
      renderWithProviders(<Contacts />);

      const title = screen.getByRole("heading", {
        name: "Contacts",
      }) as HTMLElement;
      const button = screen.getByRole("button", {
        name: "New contact",
      });

      expect(title).toHaveTextContent("Contacts");
      expect(button).toBeInTheDocument();
      expect(button).toHaveTextContent("New contact");
    });

    test("Then it should show a logo on the menu", () => {
      renderWithProviders(<Contacts />);

      const logo = screen.queryAllByLabelText("blueState");

      expect(logo).not.toBeNull();
    });

    test("Then it should show 7 rows on the table", () => {
      renderWithProviders(<Contacts />);

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

    test("Then it should call an action when clicked on the button 'Add contact'", async () => {
      renderWithProviders(<Contacts />);

      const button = screen.queryByRole("button", { name: "New contact" });

      await userEvent.click(button!);

      expect(mockedUsedNavigate).toHaveBeenCalled();
    });
  });
});
