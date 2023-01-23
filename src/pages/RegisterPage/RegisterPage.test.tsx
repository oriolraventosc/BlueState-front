import { store } from "../../redux/store";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import userEvent from "@testing-library/user-event";
import { BrowserRouter } from "react-router-dom";
import RegisterPage from "./RegisterPage";

const mockLogin = jest.fn();

jest.mock("../../hooks/useUser/useUser", () => {
  return () => ({
    userRegister: mockLogin,
  });
});

describe("Given a RegisterPage component", () => {
  describe("When it is rendered", () => {
    test("Then it should show a logo icon and a paragraph with the text 'BlueState'", () => {
      render(
        <BrowserRouter>
          <Provider store={store}>
            <RegisterPage />
          </Provider>
        </BrowserRouter>
      );

      const icon = screen.queryByLabelText("blueState");
      const title = screen.queryByLabelText("blueStateSoftware");

      expect(icon).toBeInTheDocument();
      expect(title).toBeInTheDocument();
    });

    test("Then it should show a heading level 1 title with the text 'Register'", () => {
      render(
        <BrowserRouter>
          <Provider store={store}>
            <RegisterPage />
          </Provider>
        </BrowserRouter>
      );

      const title = screen.queryByRole("heading", {
        name: "Register",
      });

      expect(title).toBeInTheDocument();
    });

    test("Then it should show a input with a label text 'Username'", () => {
      render(
        <BrowserRouter>
          <Provider store={store}>
            <RegisterPage />
          </Provider>
        </BrowserRouter>
      );

      const input = screen.queryByRole("textbox");

      expect(input).toBeInTheDocument();
    });

    test("Then it should show a button with the text 'REGISTER'", () => {
      render(
        <BrowserRouter>
          <Provider store={store}>
            <RegisterPage />
          </Provider>
        </BrowserRouter>
      );

      const button = screen.queryByRole("button");

      expect(button).toBeInTheDocument();
    });
  });

  describe("When it is rendered and the button 'REGISTER' is clicked", () => {
    test("Then the form should be submitted", async () => {
      render(
        <BrowserRouter>
          <Provider store={store}>
            <RegisterPage />
          </Provider>
        </BrowserRouter>
      );

      const username = screen.queryByRole("textbox", {
        name: "Username",
      }) as HTMLElement;
      const password = screen.getByLabelText("password") as HTMLElement;
      await userEvent.type(username, "admin123");
      await userEvent.type(password, "adminadmin123");
      const button = screen.queryByRole("button")!;
      await userEvent.click(button);

      expect(mockLogin).toHaveBeenCalled();
    });
  });
});
