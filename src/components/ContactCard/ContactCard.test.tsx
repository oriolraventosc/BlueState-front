import renderWithProviders from "../../mocks/renderWithProviders";
import ContactCard from "./ContactCard";
import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

const contact = {
  name: "app2U",
  email: "app2u@gmail.com",
  telephone: 999999999,
  sector: "Technology",
  service: "Development",
  website: "www.app2u.es",
  logo: "logo.jpg",
  backUpLogo: "logo.jpg",
  contacted: "2022",
  id: "123345",
};

const mockDelete = jest.fn();

jest.mock("../../hooks/useBusiness/useBusiness", () => {
  return () => ({
    deleteContact: mockDelete,
  });
});

const mockedUsedNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  ...(jest.requireActual("react-router-dom") as any),
  useNavigate: () => mockedUsedNavigate,
}));

describe("Given a ContactCard component", () => {
  describe("When it is rendered", () => {
    test("Then it should show a heading level title and a button with the text delete", () => {
      renderWithProviders(<ContactCard contact={contact} />);

      const title = screen.queryByRole("heading", {
        name: "app2U",
      });
      const button = screen.queryByRole("button", {
        name: "DELETE",
      });

      expect(button).toBeInTheDocument();
      expect(title).toBeInTheDocument();
    });

    test("Then it should show an image", () => {
      renderWithProviders(<ContactCard contact={contact} />);

      const logo = screen.queryByRole("img", {
        name: "app2U",
      });

      expect(logo).toBeInTheDocument();
    });

    test("Then it should show the text 'Business details' and a button 'Edit'", () => {
      renderWithProviders(<ContactCard contact={contact} />);

      const text = screen.getByText("Business details");
      const button = screen.queryByRole("button", {
        name: "Edit",
      });

      expect(text).toBeInTheDocument();
      expect(button).toBeInTheDocument();
    });

    test("Then it should show the business email, website, sector, service, telephone", () => {
      renderWithProviders(<ContactCard contact={contact} />);
      const containerWithContactData = screen.getByLabelText("card-body-data");

      expect(containerWithContactData).toBeInTheDocument();
    });

    test("Then it should call the action when clicked or submited the 'Delete' button", async () => {
      renderWithProviders(<ContactCard contact={contact} />);

      const button = screen.queryByRole("button", {
        name: "DELETE",
      });
      await userEvent.click(button!);

      expect(mockDelete).toHaveBeenCalled();
    });

    test("Then it should call the action when clicked the 'Edit' button", async () => {
      renderWithProviders(<ContactCard contact={contact} />);

      const button = screen.queryByRole("button", {
        name: "Edit",
      }) as HTMLElement;

      await userEvent.click(button);

      expect(mockedUsedNavigate).toHaveBeenCalled();
    });
  });
});
