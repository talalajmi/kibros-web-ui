import axios, { AxiosResponse } from "axios";
import { NextRouter } from "next/router";
import { isResponseModel } from "../helpers";
import { IResponseModel } from "../interfaces";
import { customPages } from "../routes";
import { axiosConfigs } from "../api/index";
import { AuthorizationRoutes } from "../routes/AuthorizationRoutes";
import { ChangePasswordModel, CreateForgetPasswordModel } from "../models";
import { passwordEndpoints } from "../api/PasswordApi";
import { toast } from "react-toastify";

export default class SubscriptionController {
  private readonly router: NextRouter;

  constructor(router: NextRouter) {
    this.router = router;
  }

  createForgetPasswordRequest = async (
    createForgetPasswordModel: CreateForgetPasswordModel
  ) => {
    toast.loading("Creating request...", { toastId: "loading" });
    try {
      const response: AxiosResponse<IResponseModel> = await axios.post(
        passwordEndpoints.createForgetPasswordRequest,
        createForgetPasswordModel,
        axiosConfigs
      );

      if (response.status === 200) {
        toast.dismiss("loading");
        toast.success("Request created, please check your email");
      }
    } catch (error: any) {
      toast.dismiss("loading");
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

  changePassword = async (changePasswordModel: ChangePasswordModel) => {
    toast.loading("Changing password...", { toastId: "loading" });
    try {
      const response: AxiosResponse<IResponseModel> = await axios.post(
        passwordEndpoints.changePassword,
        changePasswordModel,
        axiosConfigs
      );

      if (response.status === 200) {
        toast.dismiss("loading");
        toast.success("Password Changed");
        this.router.push(AuthorizationRoutes.login);
        return;
      }
    } catch (error: any) {
      toast.dismiss("loading");
      if (isResponseModel(error.response.data)) {
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
