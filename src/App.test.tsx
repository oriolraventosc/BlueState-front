import App from "./App";
import TestRenderer from "react-test-renderer";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import { MemoryRouter } from "react-router-dom";
import mockStore from "./mocks/store/mockStore";
import {
  mockUserLogged,
  mockUserNotLogged,
} from "./mocks/states/mockUserState";
import renderWithProviders from "./mocks/renderWithProviders";
import { screen, waitFor } from "@testing-library/react";

describe("Given the App component", () => {
  describe("When it is rendered with a path '/*'", () => {
    test("Then it should show the login page", () => {
      const expected = TestRenderer.create(
        <Provider store={store}>
          <MemoryRouter initialEntries={["/"]}>
            <App />
          </MemoryRouter>
        </Provider>
      );

      expect(expected).toMatchSnapshot();
    });
  });

  describe("When it is rendered and the user is logged", () => {
    test("Then it should show the contacts page", async () => {
      const initialEntries = ["/contacts"];
      const store = mockStore({ userPreloadedState: mockUserLogged });

      renderWithProviders(<App />, { store, initialEntries });
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

      renderWithProviders(<App />, { store, initialEntries });

      await waitFor(() => {
        const title = screen.queryByRole("heading", {
          name: "Sign in",
        });

        expect(title).toBeInTheDocument();
      });
    });
  });

  describe("When it is rendered with the path '/login' and the user is logged", () => {
    test("Then it should show the contacts page", async () => {
      const initialEntries = ["/login"];
      const store = mockStore({ userPreloadedState: mockUserLogged });

      renderWithProviders(<App />, { store, initialEntries });
      await waitFor(() => {
        const text = screen.getByText("Made by");

        expect(text).toBeInTheDocument();
      });
    });
  });

  describe("When it is rendered with the path '/register' and the user is logged", () => {
    test("Then it should show the contacts page", async () => {
      const initialEntries = ["/register"];
      const store = mockStore({ userPreloadedState: mockUserLogged });

      renderWithProviders(<App />, { store, initialEntries });
      await waitFor(() => {
        const text = screen.getByText("Made by");

        expect(text).toBeInTheDocument();
      });
    });
  });
});
