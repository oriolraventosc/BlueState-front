import renderWithProviders from "../../mocks/renderWithProviders";
import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import React from "react";
import UpdateContactForm from "./UpdateContactForm";

const mockUpdate = jest.fn();

jest.mock("../../hooks/useBusiness/useBusiness", () => {
  return () => ({
    updateContact: mockUpdate,
  });
});

const contact = {
  name: "Accent Systems",
  email: "info@accentsystems.com",
  telephone: 9344881122,
  sector: "Technology",
  service: "Tech services",
  website: "www.accentsystems.com",
  contacted: "2022-12-5",
  id: "922",
  logo: {} as File,
};

describe("Given a UpdateContactForm component", () => {
  describe("When it is rendered", () => {
    test("Then it should show a heading level title 1 with the text 'Update contact'", () => {
      renderWithProviders(<UpdateContactForm contact={contact} />);

      const expectedTitle = screen.queryByRole("heading", {
        level: 1,
        name: "add-new-contact",
      }) as HTMLElement;

      expect(expectedTitle).toBeInTheDocument();
    });

    test("Then it should show 8 inputs", () => {
      renderWithProviders(<UpdateContactForm contact={contact} />);

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

    test("Then when the required inputs are filled it should be submited", async () => {
      renderWithProviders(<UpdateContactForm contact={contact} />);

      const name = screen.queryByRole("textbox", {
        name: "Name",
      }) as HTMLElement;
      const email = screen.queryByRole("textbox", {
        name: "Email",
      }) as HTMLElement;
      const telephone = screen.queryByLabelText("telephone") as HTMLElement;
      const sector = screen.queryByRole("textbox", {
        name: "Sector",
      }) as HTMLElement;
      const service = screen.queryByRole("textbox", {
        name: "Service",
      }) as HTMLElement;
      const website = screen.queryByRole("textbox", {
        name: "Website",
      }) as HTMLElement;
      const button = screen.queryByRole("button", {
        name: "Update",
      }) as HTMLElement;

      await userEvent.type(name, "business");
      await userEvent.type(email, "business@gmail.com");
      await userEvent.type(telephone, "999999999");
      await userEvent.type(sector, "Marketing");
      await userEvent.type(service, "SEO");
      await userEvent.type(website, "https://www.business.com");
      await userEvent.click(button);
    });
  });
});
