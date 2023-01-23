import { UserInitialState } from "./UserSlice";
import {
  userReducer,
  userLoginActionCreator,
  userLogoutActionCreator,
} from "./UserSlice";
import { mockUser } from "../../../mocks/mockUser";

describe("Given a userReducer", () => {
  describe("When it is invoked with it's method userLogin", () => {
    test("Then it should change the user admin state isLogged to true", () => {
      const action = userLoginActionCreator(mockUser);
      const initalState = UserInitialState;
      const expectedState = {
        username: "admin",
        password: "admin",
        accesstoken: "123",
        isLogged: true,
      };

      const newState = userReducer(initalState, action);

      expect(newState).toStrictEqual(expectedState);
    });
  });

  describe("When it is invoked with it's method userLogout", () => {
    test("Then it should change the user admin state isLogged to false", () => {
      const action = userLogoutActionCreator();
      const initialState = UserInitialState;
      const expectedState = {
        username: "",
        password: "",
        accesstoken: "",
        isLogged: false,
      };

      const newState = userReducer(initialState, action);

      expect(newState).toStrictEqual(expectedState);
    });
  });
});
