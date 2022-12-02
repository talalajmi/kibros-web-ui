import { createSlice } from "@reduxjs/toolkit";
import { IUser } from "../interfaces";

export interface UsersState {
  users: IUser[];
  admins: IUser[];
}

const initialState: UsersState = {
  users: [],
  admins: [],
};

export const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    handleUsers: (state, action) => {
      state.users = action.payload;
    },
    handleAdmins: (state, action) => {
      state.admins = action.payload;
    },
    handleReset: (state) => {
      state.users = initialState.users;
    },
  },
});

export const { handleUsers, handleAdmins, handleReset } = usersSlice.actions;

export default usersSlice.reducer;
