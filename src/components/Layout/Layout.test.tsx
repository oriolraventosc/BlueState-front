import { waitFor } from "@testing-library/react";
import renderWithProviders from "../../mocks/renderWithProviders";
import {
  mockUserLogged,
  mockUserNotLogged,
} from "../../mocks/states/mockUserState";
import mockStore from "../../mocks/store/mockStore";
import Layout from "./Layout";
import { screen } from "@testing-library/react";

describe("Given a Layout component", () => {
  describe("When it is rendered with the path '/login' and the user is logged", () => {
    test("Then it should show the contacts page", async () => {
      const initialEntries = ["/login"];
      const store = mockStore({ userPreloadedState: mockUserLogged });

      renderWithProviders(<Layout />, { store, initialEntries });
      await waitFor(() => {
        const text = screen.getByText("Made by");

        expect(text).toBeInTheDocument();
      });
    });
  });

  describe("When it is rendered with the path '/contacts' and the user is not logged", () => {
    test("Then it should show the login page", async () => {
      const initialEntries = ["/contacts"];
      const store = mockStore({ userPreloadedState: mockUserNotLogged });

      renderWithProviders(<Layout />, { store, initialEntries });
      await waitFor(() => {
        const title = screen.queryByRole("heading", {
          name: "Sign in",
        });

        expect(title).toBeInTheDocument();
      });
    });
  });

  describe("When it is rendered with the path '/register' and the user is logged", () => {
    test("Then it should show the contacts page", async () => {
      const initialEntries = ["/register"];
      const store = mockStore({ userPreloadedState: mockUserLogged });

      renderWithProviders(<Layout />, { store, initialEntries });
      await waitFor(() => {
        const text = screen.getByText("Made by");

        expect(text).toBeInTheDocument();
      });
    });
  });

  describe("When it is rendered with the path '/contacts/contact/637e36a2af517156aa098996' and the user is logged", () => {
    test("Then it should show the details page with the Accent Systems data", async () => {
      const initialEntries = ["/contacts/contact/637e36a2af517156aa098996"];
      const store = mockStore({ userPreloadedState: mockUserLogged });

      renderWithProviders(<Layout />, { store, initialEntries });
      await waitFor(() => {
        const text = screen.getByText("Made by");

        expect(text).toBeInTheDocument();
      });
    });
  });
});
