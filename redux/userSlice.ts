import { createSlice } from "@reduxjs/toolkit";
import { IUser } from "../interfaces";
import { isObjEmpty } from "../utils/utils";

export interface UserState {
  user: IUser | {};
  accessToken: string;
}

const initialState: UserState = {
  user: {},
  accessToken: "",
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    handleUserLogin: (state, action) => {
      const { user } = action.payload;
      state.user = user;
    },
    handleAccessToken: (state, action) => {
      state.accessToken = action.payload;
    },
    handleLogout: (state) => {
      if (!isObjEmpty(state.user)) {
        state.user = {};
      }
      state.accessToken = "";
    },
  },
});

export const { handleUserLogin, handleAccessToken, handleLogout } =
  userSlice.actions;

export default userSlice.reducer;
