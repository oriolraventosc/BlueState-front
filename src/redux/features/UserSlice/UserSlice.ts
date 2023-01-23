import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User } from "../../../types/types";

export interface UserState extends User {
  isLogged: boolean;
}

export const UserInitialState: UserState = {
  username: "",
  password: "",
  accesstoken: "",
  isLogged: false,
};

const userSlice = createSlice({
  name: "user",
  initialState: UserInitialState,
  reducers: {
    userLogin: (initialState, action: PayloadAction<User>) => ({
      ...action.payload,
      isLogged: true,
    }),
    userLogout: (initialState) => ({
      ...initialState,
      username: "",
      accesstoken: "",
      isLogged: false,
    }),
  },
});

export const userReducer = userSlice.reducer;

export const {
  userLogin: userLoginActionCreator,
  userLogout: userLogoutActionCreator,
} = userSlice.actions;
