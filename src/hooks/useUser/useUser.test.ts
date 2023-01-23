import useUser from "./useUser";
import { renderHook } from "@testing-library/react";
import { store } from "../../redux/store";
import {
  openErrorModalActionCreator,
  openSuccessModalActionCreator,
} from "../../redux/features/UiSlice/UiSlice";
import ProviderWrapper from "../../mocks/providerWrapper";
import { User } from "../../types/types";
import { JwtPayload } from "jwt-decode";
import { userLogoutActionCreator } from "../../redux/features/UserSlice/UserSlice";

const dispatch = jest.spyOn(store, "dispatch");

jest.mock("jwt-decode", () => {
  return () => ({ id: "testid", username: "admin" } as JwtPayload);
});

const mockedUsedNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  ...(jest.requireActual("react-router-dom") as any),
  useNavigate: () => mockedUsedNavigate,
}));

describe("Given a useUser custom hook", () => {
  describe("When it is invoked with the method userLogin with a username 'admin' and a password 'admin'", () => {
    test("Then it should call it's dispatch method", async () => {
      const {
        result: {
          current: { userLogin },
        },
      } = renderHook(() => useUser(), { wrapper: ProviderWrapper });

      const userData = {
        username: "admin",
        password: "admin",
      };

      await userLogin(userData);

      expect(dispatch).toHaveBeenCalled();
    });
  });

  describe("When it is invoked with the method userLogin with a username 'Admin' and a password 'aDmIn'", () => {
    test("Then it should call the dispatch method of the error modal", async () => {
      const {
        result: { current },
      } = renderHook(() => useUser(), { wrapper: ProviderWrapper });

      const userData: User = {
        username: "admin",
        password: "12345678",
      };
      await current.userLogin(userData);

      expect(dispatch).toHaveBeenCalledWith(
        openErrorModalActionCreator("An error ocurred logging in!")
      );
    });
  });

  describe("When it is invoked with the method userRegister and the usename 'Paulie' and password 'afdafafdaffsafd'", () => {
    test("Then it should call the success modal dispatch", async () => {
      const {
        result: { current },
      } = renderHook(() => useUser(), { wrapper: ProviderWrapper });

      const userData: User = {
        username: "Johny",
        password: "afdafafdaffsafd",
      };
      await current.userRegister(userData);

      expect(dispatch).toHaveBeenCalledWith(
        openSuccessModalActionCreator("User Johny registered!")
      );
    });
  });

  describe("When it is invoked with the method userRegister with an empty username and password", () => {
    test("Then it should call the error modal dispatch", async () => {
      const {
        result: { current },
      } = renderHook(() => useUser(), { wrapper: ProviderWrapper });

      const userData: User = {
        username: "Paige",
        password: "paige",
      };
      await current.userRegister(userData);

      expect(dispatch).toHaveBeenCalled();
    });
  });

  describe("When it is invoked with the method userLogout", () => {
    test("Then it should log the user out removing it's token from the localStorage", () => {
      const {
        result: { current },
      } = renderHook(() => useUser(), { wrapper: ProviderWrapper });

      current.userLogout();

      expect(dispatch).toHaveBeenCalledWith(userLogoutActionCreator());
    });
  });
});
