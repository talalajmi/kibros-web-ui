import { baseUrl } from "../constants";

export const categoryEndpoints = {
  getCategories: (page: number, size: number) =>
    `${baseUrl}Category/getList?page=${page}&size=${size}`,
  addCategory: `${baseUrl}Category/create`,
  editCategory: (id: string) => `${baseUrl}Category/update/${id}`,
  deleteCategory: (id: string) => `${baseUrl}Category/delete/${id}`,
};
