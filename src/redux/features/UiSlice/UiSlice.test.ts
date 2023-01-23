import UiState from "./types";
import { toastSliceReducer, uiInitialState } from "./UiSlice";
import {
  openSuccessModalActionCreator,
  closeModalActionCreator,
  openErrorModalActionCreator,
  openLoadingActionCreator,
  closeLoadingActionCreator,
} from "./UiSlice";

describe("Given a uiSuccessSliceReducer", () => {
  describe("When it is invoked with openSuccessModalActionCreator", () => {
    test("Then it should show the text 'Welcome user!'", () => {
      const action = openSuccessModalActionCreator("Welcome user!");
      const initialState = uiInitialState;
      const expectedState = {
        alert: "Welcome user!",
        state: "success",
        isLoading: false,
      };

      const newState = toastSliceReducer(initialState, action);

      expect(newState).toStrictEqual(expectedState);
    });
  });

  describe("When it is invoked with closeModalActionCreator", () => {
    test("Then it should show an empty string as the text", () => {
      const action = closeModalActionCreator();
      const initialState: UiState = {
        alert: "Welcome user!",
        state: "success",
      };
      const expectedState = {
        alert: "",
        state: "info",
      };

      const newState = toastSliceReducer(initialState, action);

      expect(newState).toStrictEqual(expectedState);
    });
  });

  describe("When it is invoked with openErrorModalActionCreator", () => {
    test("Then it should show the text 'Welcome user!'", () => {
      const action = openErrorModalActionCreator(
        "An error ocurred logging in!"
      );
      const initialState = uiInitialState;
      const expectedState = {
        alert: "An error ocurred logging in!",
        state: "error",
        isLoading: false,
      };

      const newState = toastSliceReducer(initialState, action);

      expect(newState).toStrictEqual(expectedState);
    });
  });

  describe("When it is invoked with openLoading", () => {
    test("Then it should change the isLoading property to true", () => {
      const initialState = uiInitialState;
      const expectedState = { ...initialState, isLoading: true };

      const newState = toastSliceReducer(
        initialState,
        openLoadingActionCreator()
      );

      expect(newState).toStrictEqual(expectedState);
    });
  });

  describe("When it is invoked with closeLoading", () => {
    test("Then it should change the isLoading property from true to false", () => {
      const initialState = { ...uiInitialState, isLoading: true };
      const expectedState = { ...uiInitialState, isLoading: false };

      const newState = toastSliceReducer(
        initialState,
        closeLoadingActionCreator()
      );

      expect(newState).toStrictEqual(expectedState);
    });
  });
});
