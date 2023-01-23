import { BrowserRouter } from "react-router-dom";
import { store } from "../../redux/store";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import LoginPage from "./LoginPage";
import userEvent from "@testing-library/user-event";

const mockLogin = jest.fn();

jest.mock("../../hooks/useUser/useUser", () => {
  return () => ({
    userLogin: mockLogin,
  });
});

describe("Given a LoginPage component", () => {
  describe("When it is rendered", () => {
    test("Then it should show a logo icon and a paragraph with the text 'BlueState'", () => {
      render(
        <BrowserRouter>
          <Provider store={store}>
            <LoginPage />
          </Provider>
        </BrowserRouter>
      );

      const icon = screen.queryByLabelText("blueState");
      const title = screen.queryByLabelText("blueStateSoftware");

      expect(icon).toBeInTheDocument();
      expect(title).toBeInTheDocument();
    });

    test("Then it should show a heading level 1 title with the text 'Sign in'", () => {
      render(
        <BrowserRouter>
          <Provider store={store}>
            <LoginPage />
          </Provider>
        </BrowserRouter>
      );

      const title = screen.queryByRole("heading", {
        name: "Sign in",
      });

      expect(title).toBeInTheDocument();
    });

    test("Then it should show a input with a label text 'Username'", () => {
      render(
        <BrowserRouter>
          <Provider store={store}>
            <LoginPage />
          </Provider>
        </BrowserRouter>
      );

      const input = screen.queryByRole("textbox");

      expect(input).toBeInTheDocument();
    });

    test("Then it should show a button with the text 'SIGN IN'", () => {
      render(
        <BrowserRouter>
          <Provider store={store}>
            <LoginPage />
          </Provider>
        </BrowserRouter>
      );

      const button = screen.queryByRole("button");

      expect(button).toBeInTheDocument();
    });
  });

  describe("When it is rendered and the button 'SIGN IN' is clicked", () => {
    test("Then the form should be submitted", async () => {
      render(
        <BrowserRouter>
          <Provider store={store}>
            <LoginPage />
          </Provider>
        </BrowserRouter>
      );

      const username = screen.queryByRole("textbox", {
        name: "Username",
      }) as HTMLElement;
      const password = screen.getByLabelText("password") as HTMLElement;
      await userEvent.type(username, "admin");
      await userEvent.type(password, "admin");
      const button = screen.queryByRole("button")!;
      await userEvent.click(button);

      expect(mockLogin).toHaveBeenCalled();
    });
  });
});
