// ** Store Imports
import { useDispatch, useSelector } from "react-redux";
import { ICategory } from "../../interfaces";
import {
  handleCategories,
  handlePagesCalled,
  handleReset,
} from "../../redux/categorySlice";

interface CategoryState {
  category: {
    categories: ICategory[];
    pagesCalled: number[];
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

  const setCategories = (categories: ICategory[]) => {
    dispatch(handleCategories(categories));
  };

  const setPagesCalled = (page: number) => {
    dispatch(handlePagesCalled(page));
  };

  const resetCategoryState = () => {
    dispatch(handleReset());
  };

  return {
    categories,
    pagesCalled,
    setCategories,
    setPagesCalled,
    resetCategoryState,
  };
};
