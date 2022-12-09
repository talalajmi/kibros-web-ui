import { createSlice } from "@reduxjs/toolkit";
import { IUser } from "../interfaces";

export interface UsersState {
  users: IUser[];
  userPagesCalled: number[];
  admins: IUser[];
  adminPagesCalled: number[];
}

const initialState: UsersState = {
  users: [],
  userPagesCalled: [],
  admins: [],
  adminPagesCalled: [],
};

export const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    handleUsers: (state, action) => {
      state.users = action.payload;
    },
    handleUserPages: (state, action) => {
      state.userPagesCalled.push(action.payload);
    },
    handleAdminPages: (state, action) => {
      state.adminPagesCalled.push(action.payload);
    },
    handleAdmins: (state, action) => {
      state.admins = action.payload;
    },
    handleReset: (state) => {
      state.users = initialState.users;
    },
  },
});

export const {
  handleUsers,
  handleUserPages,
  handleAdminPages,
  handleAdmins,
  handleReset,
} = usersSlice.actions;

export default usersSlice.reducer;
