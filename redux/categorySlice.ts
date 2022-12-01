import { createSlice } from "@reduxjs/toolkit";
import { ICategory } from "../interfaces/Category";

export interface CategoryState {
  categories: ICategory[];
}

const initialState: CategoryState = {
  categories: [],
};

export const categorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {
    handleCategories: (state, action) => {
      state.categories = action.payload;
    },
    handleReset: (state) => {
      state.categories = initialState.categories;
    },
  },
});

export const { handleCategories, handleReset } = categorySlice.actions;

export default categorySlice.reducer;
