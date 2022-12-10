import { createSlice } from "@reduxjs/toolkit";
import { ILesson } from "../interfaces";

export interface LessonState {
  lessons: ILesson[];
  pagesCalled: number[];
}

const initialState: LessonState = {
  lessons: [],
  pagesCalled: [],
};

export const lessonSlice = createSlice({
  name: "lesson",
  initialState,
  reducers: {
    handleLessons: (state, action) => {
      state.lessons = action.payload;
    },
    handlePagesCalled: (state, action) => {
      state.pagesCalled.push(action.payload);
    },
    handleReset: (state) => {
      state.lessons = initialState.lessons;
      state.pagesCalled = initialState.pagesCalled;
    },
  },
});

export const { handleLessons, handlePagesCalled, handleReset } =
  lessonSlice.actions;

export default lessonSlice.reducer;
