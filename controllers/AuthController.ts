import axios, { AxiosResponse } from "axios";
import { NextRouter } from "next/router";
import { toast } from "react-toastify";
import { authEndpoints, axiosConfigs } from "../api";
import { isResponseModel } from "../helpers";
import { IResponseModel } from "../interfaces";
import { LoginModel, RegisterModel } from "../models";
import { customPages } from "../routes";

export default class AuthController {
  private readonly router: NextRouter;

  constructor(router: NextRouter) {
    this.router = router;
  }

  login = async (loginModel: LoginModel) => {
    toast.loading("Logging in...", { toastId: "loading" });
    try {
      const response: AxiosResponse<IResponseModel> = await axios.post(
        authEndpoints.login,
        loginModel,
        axiosConfigs
      );

      if (isResponseModel(response.data)) {
        if (response.data.result === 200) {
          toast.dismiss("loading");
          toast.success("Login Successful");
          localStorage.setItem("at", response.data.body.accessToken);
          return response.data.body.accessToken as string;
        }
      }
    } catch (error: any) {
      toast.dismiss("loading");
      if (isResponseModel(error?.response?.data)) {
        toast.error(error.response.data.message);
        return;
      } else {
        this.router.push(customPages.error);
        return;
      }
    }
  };

  register = async (registrationModel: RegisterModel) => {
    toast.loading("Registering user...", { toastId: "loading" });
    try {
      const { data }: AxiosResponse<IResponseModel> = await axios.post(
        authEndpoints.register,
        registrationModel,
        axiosConfigs
      );

      if (isResponseModel(data)) {
        if (data.result === 200) {
          toast.dismiss("loading");
          toast.success("Registration Successful");
          return data.body.accessToken as string;
        } else {
          toast.dismiss("loading");
          toast.error(data.message);
        }
      }
    } catch (error: any) {
      toast.dismiss("loading");
      if (isResponseModel(error.response.data)) {
        toast.error(error.response.data.message);
        return;
      } else {
        this.router.push(customPages.error);
        return;
      }
    }
  };
}
