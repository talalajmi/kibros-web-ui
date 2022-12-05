import { createSlice } from "@reduxjs/toolkit";
import { ICategory } from "../interfaces/Category";

export interface CategoryState {
  categories: ICategory[];
  pagesCalled: number[];
}

const initialState: CategoryState = {
  categories: [],
  pagesCalled: [],
};

export const categorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {
    handleCategories: (state, action) => {
      state.categories = action.payload;
    },
    handlePagesCalled: (state, action) => {
      state.pagesCalled = action.payload;
    },
    handleReset: (state) => {
      state.categories = initialState.categories;
      state.pagesCalled = initialState.pagesCalled;
    },
  },
});

export const { handleCategories, handlePagesCalled, handleReset } =
  categorySlice.actions;

export default categorySlice.reducer;
