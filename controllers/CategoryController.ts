import axios, { AxiosResponse } from "axios";
import { NextRouter } from "next/router";
import toast from "react-hot-toast";
import { categoryEndpoints } from "../api";
import { isResponseModel } from "../helpers";
import { IResponseModel } from "../interfaces";
import { customPages } from "../routes";
import { getConfigsWithAccessToken } from "../api/index";
import { AuthorizationRoutes } from "../routes/AuthorizationRoutes";
import { CreateCategorymodel } from "../models";
import EditCategoryModel from "../models/EditCategoryModel";

export default class CategoryController {
  private readonly accessToken: string;
  private readonly router: NextRouter;

  constructor(accessToken: string, router: NextRouter) {
    this.accessToken = accessToken;
    this.router = router;
  }

  getCategories = async () => {
    try {
      const {
        data: { body, result },
      }: AxiosResponse<IResponseModel> = await axios.get(
        categoryEndpoints.getCategories,
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

  addCategory = async (createCategoryModel: CreateCategorymodel) => {
    try {
      const {
        data: { body, result },
      }: AxiosResponse<IResponseModel> = await axios.post(
        categoryEndpoints.addCategory,
        createCategoryModel,
        getConfigsWithAccessToken(this.accessToken)
      );

      if (result === 200) {
        return body;
      }
    } catch (error: any) {
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

  editCategory = async (
    categoryId: string,
    editCategoryModel: EditCategoryModel
  ) => {
    try {
      const {
        data: { body, result },
      }: AxiosResponse<IResponseModel> = await axios.post(
        categoryEndpoints.editCategory(categoryId),
        editCategoryModel,
        getConfigsWithAccessToken(this.accessToken)
      );

      if (result === 200) {
        return body;
      }
    } catch (error: any) {
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
