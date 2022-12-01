import { baseUrl } from "../constants";

export const categoryEndpoints = {
  getCategories: `${baseUrl}Category/getList`,
  addCategory: `${baseUrl}Category/create`,
  editCategory: (id: string) => `${baseUrl}Category/update/${id}`,
};
