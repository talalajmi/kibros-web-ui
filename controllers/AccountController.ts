import axios, { AxiosResponse } from "axios";
import { NextRouter } from "next/router";
import { accountEndpoints, getConfigsWithAccessToken } from "../api";
import { isResponseModel } from "../helpers";
import { IResponseModel } from "../interfaces";
import { customPages } from "../routes";
import { AuthorizationRoutes } from "../routes";
import {
  ActivateAccountModel,
  UpdateAccountModel,
  AddAdminModel,
} from "../models";
import { toast } from "react-toastify";

export default class AccountController {
  private readonly accessToken: string;
  private readonly router: NextRouter;

  constructor(accessToken: string, router: NextRouter) {
    this.accessToken = accessToken;
    this.router = router;
  }

  getAccounts = async (page: number, size: number) => {
    try {
      const {
        data: { body, result },
      }: AxiosResponse<IResponseModel> = await axios.get(
        accountEndpoints.getAccounts(page, size),
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

  accountSuspenstion = async (
    accountId: string,
    updateAccountModel: UpdateAccountModel,
    isSuspended: boolean
  ) => {
    toast.loading(isSuspended ? "Unsuspending user..." : "Suspending user...", {
      toastId: "loading",
    });
    try {
      const {
        data: { body, result },
      }: AxiosResponse<IResponseModel> = await axios.put(
        accountEndpoints.toggleAccountSuspention(accountId),
        updateAccountModel,
        getConfigsWithAccessToken(this.accessToken)
      );

      if (result === 200) {
        toast.dismiss("loading");
        toast.success(body.isSuspended ? "User suspended" : "User unsuspended");
        return body;
      }
    } catch (error: any) {
      toast.dismiss("loading");
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
    toast.loading("Adding admin...", { toastId: "loading" });
    try {
      const {
        data: { body, result },
      }: AxiosResponse<IResponseModel> = await axios.post(
        accountEndpoints.addAdmin,
        addAdminModel,
        getConfigsWithAccessToken(this.accessToken)
      );

      if (result === 200) {
        toast.dismiss("loading");
        toast.success("Admin Added");
        return body;
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

  updateAccount = async (
    accountId: string,
    updateAccountModel: UpdateAccountModel
  ) => {
    toast.loading("Updating user...", { toastId: "loading" });
    try {
      const {
        data: { body, result },
      }: AxiosResponse<IResponseModel> = await axios.put(
        accountEndpoints.updateAccount(accountId),
        updateAccountModel,
        getConfigsWithAccessToken(this.accessToken)
      );

      if (result === 200) {
        toast.dismiss("loading");
        toast.success("User updated successfully");
        return body;
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

  activateAccount = async (
    accountId: string,
    activateAccountModel: ActivateAccountModel
  ) => {
    const t = toast.loading("Activating user...", { toastId: "loading" });
    try {
      const {
        data: { body, result },
      }: AxiosResponse<IResponseModel> = await axios.put(
        accountEndpoints.activateAccount(accountId),
        activateAccountModel,
        getConfigsWithAccessToken(this.accessToken)
      );

      if (result === 200) {
        toast.dismiss("loading");
        toast.success("Account activated");
        return body;
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
