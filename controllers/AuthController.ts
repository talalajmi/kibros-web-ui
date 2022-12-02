import axios, { AxiosResponse } from "axios";
import { NextRouter } from "next/router";
import toast from "react-hot-toast";
import { authEndpoints, axiosConfigs } from "../api";
import { isResponseModel } from "../helpers";
import { IResponseModel } from "../interfaces";
import { LoginModel, RegisterModel } from "../models";
import { publicRoutes } from "../routes";

export default class AuthController {
  private readonly router: NextRouter;

  constructor(router: NextRouter) {
    this.router = router;
  }

  login = async (loginModel: LoginModel) => {
    try {
      const { data }: AxiosResponse<IResponseModel> = await axios.post(
        authEndpoints.login,
        loginModel,
        axiosConfigs
      );
      if (isResponseModel(data)) {
        if (data.result === 200) {
          toast.success("Login Successful");
          localStorage.setItem("at", data.body.accessToken);
          return data.body.accessToken as string;
        } else {
          toast.error(data.message);
          return;
        }
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
        this.router.push(publicRoutes.error);
        return;
      }
    }
  };

  register = async (registrationModel: RegisterModel) => {
    try {
      const { data }: AxiosResponse<IResponseModel> = await axios.post(
        authEndpoints.register,
        registrationModel,
        axiosConfigs
      );

      if (isResponseModel(data)) {
        if (data.result === 200) {
          toast.success("Registration Successful");
          return data.body.accessToken as string;
        } else {
          toast.error(data.message);
          return;
        }
      }
    } catch (error: any) {
      if (isResponseModel(error.response.data)) {
        if (error.response.data.result === 401) {
          return error.response.data;
        } else {
          toast.error(error.response.data.message);
        }
        return;
      } else {
        this.router.push(publicRoutes.error);
        return;
      }
    }
  };
}
