import axios, { AxiosResponse } from "axios";
import { NextRouter } from "next/router";
import { categoryEndpoints } from "../api";
import { isResponseModel } from "../helpers";
import { IResponseModel } from "../interfaces";
import { customPages } from "../routes";
import { getConfigsWithAccessToken } from "../api/index";
import { AuthorizationRoutes } from "../routes/AuthorizationRoutes";
import { CreateCategoryModel } from "../models";
import EditCategoryModel from "../models/EditCategoryModel";
import { toast } from "react-toastify";

export default class CategoryController {
  private readonly accessToken: string;
  private readonly router: NextRouter;

  constructor(accessToken: string, router: NextRouter) {
    this.accessToken = accessToken;
    this.router = router;
  }

  getCategories = async (page: number, size: number) => {
    try {
      const {
        data: { body, result },
      }: AxiosResponse<IResponseModel> = await axios.get(
        categoryEndpoints.getCategories(page, size),
        getConfigsWithAccessToken(this.accessToken)
      );

      if (result === 200) {
        return body;
      }
    } catch (error: any) {
      if (isResponseModel(error?.response?.data)) {
        if (error.response.data.result === 401) {
          return error.response.data;
        } else {
          toast.error(error.response.data.message);
        }
        return;
      } else {
        this.router.push(customPages.error);
        return;
      }
    }
  };

  addCategory = async (createCategoryModel: CreateCategoryModel) => {
    const t = toast.loading("Adding category...", { toastId: "loading" });
    try {
      const {
        data: { body, result },
      }: AxiosResponse<IResponseModel> = await axios.post(
        categoryEndpoints.addCategory,
        createCategoryModel,
        getConfigsWithAccessToken(this.accessToken)
      );

      if (result === 200) {
        toast.update(t, {
          render: "Category Added",
          type: "success",
          isLoading: false,
        });
        return body;
      }
    } catch (error: any) {
      if (isResponseModel(error?.response?.data)) {
        if (error.response.data.result === 401) {
          this.router.push(AuthorizationRoutes.logout);
        } else {
          toast.update(t, {
            render: error.response.data.message,
            type: "error",
            isLoading: false,
          });
        }
        return;
      } else {
        this.router.push(customPages.error);
        return;
      }
    }
  };

  editCategory = async (
    categoryId: string,
    editCategoryModel: EditCategoryModel
  ) => {
    const t = toast.loading("Editing category...", { toastId: "loading" });
    try {
      const {
        data: { body, result },
      }: AxiosResponse<IResponseModel> = await axios.post(
        categoryEndpoints.editCategory(categoryId),
        editCategoryModel,
        getConfigsWithAccessToken(this.accessToken)
      );

      if (result === 200) {
        toast.update(t, {
          render: "Category Edited",
          type: "success",
          isLoading: false,
        });
        return body;
      }
    } catch (error: any) {
      if (isResponseModel(error?.response?.data)) {
        if (error.response.data.result === 401) {
          this.router.push(AuthorizationRoutes.logout);
        } else {
          toast.update(t, {
            render: error.response.data.message,
            type: "error",
            isLoading: false,
          });
        }
        return;
      } else {
        this.router.push(customPages.error);
        return;
      }
    }
  };

  deleteCategory = async (categoryId: string) => {
    toast.loading("Deleting category...", { toastId: "loading" });
    try {
      const {
        data: { body, result },
      }: AxiosResponse<IResponseModel> = await axios.delete(
        categoryEndpoints.deleteCategory(categoryId),
        getConfigsWithAccessToken(this.accessToken)
      );

      if (result === 200) {
        toast.dismiss("loading");
        toast.success("Category Deleted");
        return true;
      }
    } catch (error: any) {
      toast.dismiss("loading");
      if (isResponseModel(error?.response?.data)) {
        if (error.response.data.result === 401) {
          this.router.push(AuthorizationRoutes.logout);
        } else {
          toast.error(error.response.data.message);
        }
        return;
      } else {
        this.router.push(customPages.error);
        return;
      }
    }
  };
}
