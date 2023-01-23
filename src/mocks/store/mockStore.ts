import { configureStore } from "@reduxjs/toolkit";
import { contactsReducer } from "../../redux/features/BusinessSlice/BusinessSlice";
import { toastSliceReducer } from "../../redux/features/UiSlice/UiSlice";
import {
  userReducer,
  UserState,
} from "../../redux/features/UserSlice/UserSlice";

interface MockStoreProps {
  userPreloadedState: UserState;
}

const mockStore = ({ userPreloadedState }: MockStoreProps) =>
  configureStore({
    reducer: {
      userActions: userReducer,
      uiModal: toastSliceReducer,
      contactsActions: contactsReducer,
    },
    preloadedState: {
      userActions: userPreloadedState,
    },
  });

export default mockStore;
