import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import { userReducer } from "./features/UserSlice/UserSlice";
import { toastSliceReducer } from "./features/UiSlice/UiSlice";
import { contactsReducer } from "./features/BusinessSlice/BusinessSlice";

export const store = configureStore({
  reducer: {
    userActions: userReducer,
    uiModal: toastSliceReducer,
    contactsActions: contactsReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
