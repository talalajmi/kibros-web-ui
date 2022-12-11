import { createSlice } from "@reduxjs/toolkit";
import { ICategory } from "../interfaces/Category";

export interface CategoryState {
  categories: ICategory[];
  pagesCalled: number[];
  pagesCount: number;
}

const initialState: CategoryState = {
  categories: [],
  pagesCalled: [],
  pagesCount: 1,
};

export const categorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {
    handleCategories: (state, action) => {
      state.categories = action.payload;
    },
    handlePagesCalled: (state, action) => {
      state.pagesCalled.push(action.payload);
    },
    handlePagesCount: (state, action) => {
      state.pagesCount = action.payload;
    },
    handleReset: (state) => {
      state.categories = initialState.categories;
      state.pagesCalled = initialState.pagesCalled;
    },
  },
});

export const {
  handleReset,
  handleCategories,
  handlePagesCount,
  handlePagesCalled,
} = categorySlice.actions;

export default categorySlice.reducer;
