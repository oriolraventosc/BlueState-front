import renderWithProviders from "../../mocks/renderWithProviders";
import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import React from "react";
import RegisterContact from "./RegisterContact";

const mockCreate = jest.fn();

jest.mock("../../hooks/useBusiness/useBusiness", () => {
  return () => ({
    addNewContact: mockCreate,
  });
});

describe("Given a RegisterContact component", () => {
  describe("When it is rendered", () => {
    test("Then it shoul show a heading level 1 title 'Add new contact'", () => {
      renderWithProviders(<RegisterContact />);

      const title = screen.queryByRole("heading", {
        level: 1,
      });

      expect(title).toBeInTheDocument();
    });

    test("Then it should show 8 inputs", () => {
      renderWithProviders(<RegisterContact />);

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

    test("Then it should submit the form when clicked or submited the 'Add contact' button", async () => {
      renderWithProviders(<RegisterContact />);

      const name = screen.queryByRole("textbox", {
        name: "Name",
      }) as HTMLElement;
      const email = screen.queryByRole("textbox", {
        name: "Email",
      }) as HTMLElement;
      const telephone = screen.getByLabelText("telephone") as HTMLElement;
      const sector = screen.queryByRole("textbox", {
        name: "Sector",
      }) as HTMLElement;
      const service = screen.queryByRole("textbox", {
        name: "Service",
      }) as HTMLElement;
      const website = screen.queryByRole("textbox", {
        name: "Website",
      }) as HTMLElement;
      const addContactButton = screen.queryByRole("button") as HTMLElement;

      await userEvent.type(name, "business");
      await userEvent.type(email, "business@gmail.com");
      await userEvent.type(telephone, "999999999");
      await userEvent.type(sector, "Marketing");
      await userEvent.type(service, "SEO");
      await userEvent.type(website, "https://www.business.com");
      await userEvent.click(addContactButton);

      expect(mockCreate).toHaveBeenCalled();
    });
  });
});
