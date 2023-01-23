import { configureStore, PreloadedState } from "@reduxjs/toolkit";
import { render, RenderOptions } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { PropsWithChildren } from "react";
import { Provider } from "react-redux";
import { toastSliceReducer } from "../redux/features/UiSlice/UiSlice";
import { RootState, store } from "../redux/store";
import { userReducer } from "../redux/features/UserSlice/UserSlice";
import { InitialEntry } from "@remix-run/router";
import { contactsReducer } from "../redux/features/BusinessSlice/BusinessSlice";

interface ExtendedRenderOptions extends RenderOptions {
  preloadedState?: PreloadedState<RootState>;
  store?: typeof store;
  initialEntries?: InitialEntry[];
}

export const renderWithProviders = (
  ui: React.ReactElement,
  {
    preloadedState,
    initialEntries,
    store = configureStore({
      reducer: {
        uiModal: toastSliceReducer,
        userActions: userReducer,
        contactsActions: contactsReducer,
      },
      preloadedState,
    }),
    ...renderOptions
  }: ExtendedRenderOptions = {}
) => {
  const Wrapper = ({ children }: PropsWithChildren<{}>): JSX.Element => {
    return (
      <>
        <BrowserRouter>
          <Provider store={store}>{children}</Provider>
        </BrowserRouter>
      </>
    );
  };
  return { store, ...render(ui, { wrapper: Wrapper, ...renderOptions }) };
};

export default renderWithProviders;
