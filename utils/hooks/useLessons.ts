// ** Store Imports
import { useDispatch, useSelector } from "react-redux";
import { ILesson } from "../../interfaces";
import {
  handleLessons,
  handlePagesCalled,
  handleReset,
} from "../../redux/lessonSlice";

interface LessonState {
  lesson: {
    lessons: ILesson[];
    pagesCalled: number[];
  };
}

export const useLessons = () => {
  // ** Hooks
  const dispatch = useDispatch();
  const lessons = useSelector((state: LessonState) => state.lesson.lessons);
  const pagesCalled = useSelector(
    (state: LessonState) => state.lesson.pagesCalled
  );

  const setLessons = (lessons: ILesson[]) => {
    dispatch(handleLessons(lessons));
  };

  const setPagesCalled = (page: number) => {
    dispatch(handlePagesCalled(page));
  };

  const resetLessonState = () => {
    dispatch(handleReset());
  };

  return {
    lessons,
    pagesCalled,
    setLessons,
    setPagesCalled,
    resetLessonState,
  };
};
