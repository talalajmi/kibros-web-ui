// ** Store Imports
import { useDispatch, useSelector } from "react-redux";
import { ICategory } from "../../interfaces";
import { handleCategories, handleReset } from "../../redux/categorySlice";

interface CategoryState {
  category: {
    categories: ICategory[];
  };
}

export const useCategories = () => {
  // ** Hooks
  const dispatch = useDispatch();
  const categories = useSelector(
    (state: CategoryState) => state.category.categories
  );

  const setCategories = (categories: ICategory[]) => {
    dispatch(handleCategories(categories));
  };

  const resetCategoryState = () => {
    dispatch(handleReset());
  };

  return {
    categories,
    setCategories,
    resetCategoryState,
  };
};
