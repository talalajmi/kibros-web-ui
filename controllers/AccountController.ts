import axios, { AxiosResponse } from "axios";
import { NextRouter } from "next/router";
import toast from "react-hot-toast";
import { accountEndpoints } from "../api";
import { isResponseModel } from "../helpers";
import { IResponseModel } from "../interfaces";
import { customPages } from "../routes";
import { getConfigsWithAccessToken } from "../api/index";
import AddAdminModel from "../models/AddAdminModel";
import { AuthorizationRoutes } from "../routes/AuthorizationRoutes";
import { ActivateAccountModel } from "../models";
import { authEndpoints } from "../api/AuthApi";

export default class AccountController {
  private readonly accessToken: string;
  private readonly router: NextRouter;

  constructor(accessToken: string, router: NextRouter) {
    this.accessToken = accessToken;
    this.router = router;
  }

  getAllAccounts = async () => {
    try {
      const {
        data: { body, result },
      }: AxiosResponse<IResponseModel> = await axios.get(
        accountEndpoints.getAllAccounts,
        getConfigsWithAccessToken(this.accessToken)
      );

      if (result === 200) {
        return body;
      }
    } catch (error: any) {
      if (isResponseModel(error?.response?.data)) {
        if (error.response.data.result === 401) {
          this.router.push(AuthorizationRoutes.logout);
          return;
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

  addAdmin = async (addAdminModel: AddAdminModel) => {
    try {
      const {
        data: { body, result },
      }: AxiosResponse<IResponseModel> = await axios.post(
        accountEndpoints.addAdmin,
        addAdminModel,
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

  getAccount = async (accountId: string) => {
    try {
      const {
        data: { body, result },
      }: AxiosResponse<IResponseModel> = await axios.get(
        accountEndpoints.getAccount(accountId),
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

  activateAccount = async (
    accountId: string,
    activateAccountModel: ActivateAccountModel
  ) => {
    try {
      const {
        data: { body, result },
      }: AxiosResponse<IResponseModel> = await axios.put(
        accountEndpoints.activateAccount(accountId),
        activateAccountModel,
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
