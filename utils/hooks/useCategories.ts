// ** Store Imports
import { useDispatch, useSelector } from "react-redux";
import { ICategory } from "../../interfaces";
import {
  handleCategories,
  handlePagesCalled,
  handlePagesCount,
  handleReset,
} from "../../redux/categorySlice";

interface CategoryState {
  category: {
    categories: ICategory[];
    pagesCalled: number[];
    pagesCount: number;
  };
}

export const useCategories = () => {
  // ** Hooks
  const dispatch = useDispatch();

  const categories = useSelector(
    (state: CategoryState) => state.category.categories
  );

  const pagesCalled = useSelector(
    (state: CategoryState) => state.category.pagesCalled
  );

  const pagesCount = useSelector(
    (state: CategoryState) => state.category.pagesCount
  );

  const setCategories = (categories: ICategory[]) => {
    dispatch(handleCategories(categories));
  };

  const setPagesCalled = (page: number) => {
    dispatch(handlePagesCalled(page));
  };

  const setPagesCount = (page: number) => {
    dispatch(handlePagesCount(page));
  };

  const resetCategoryState = () => {
    dispatch(handleReset());
  };

  return {
    categories,
    pagesCount,
    pagesCalled,
    setCategories,
    setPagesCount,
    setPagesCalled,
    resetCategoryState,
  };
};
