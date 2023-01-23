import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import UiState from "./types";

export const uiInitialState: UiState = {
  alert: "",
  state: "info",
  isLoading: false,
};

const toastSlice = createSlice({
  name: "modal",
  initialState: uiInitialState,
  reducers: {
    openSuccessModal: (intitialState, action: PayloadAction<string>) => ({
      ...intitialState,
      alert: action.payload,
      state: "success",
    }),
    closeModal: (initialState) => ({
      ...initialState,
      alert: "",
      state: "info",
    }),
    openErrorModal: (intitialState, action: PayloadAction<string>) => ({
      ...intitialState,
      alert: action.payload,
      state: "error",
    }),
    openLoading: (initialState) => ({
      ...initialState,
      isLoading: true,
    }),
    closeLoading: (initialState) => ({
      ...initialState,
      isLoading: false,
    }),
  },
});

export const toastSliceReducer = toastSlice.reducer;

export const {
  openSuccessModal: openSuccessModalActionCreator,
  closeModal: closeModalActionCreator,
  openErrorModal: openErrorModalActionCreator,
  openLoading: openLoadingActionCreator,
  closeLoading: closeLoadingActionCreator,
} = toastSlice.actions;
