import axios, { AxiosResponse } from "axios";
import { NextRouter } from "next/router";
import toast from "react-hot-toast";
import { categoryEndpoints } from "../api";
import { isResponseModel } from "../helpers";
import { IResponseModel } from "../interfaces";
import { customPages } from "../routes";
import { getConfigsWithAccessToken } from "../api/index";
import { AuthorizationRoutes } from "../routes/AuthorizationRoutes";
import {
  CreateCategorymodel,
  CreateCustomerModel,
  CreateSubscriptionModel,
  GetTokenIdFromSavedCardModel,
  SaveCardModel,
} from "../models";
import EditCategoryModel from "../models/EditCategoryModel";
import { tapEndpoints } from "../api/TapApi";
import GetTokenFromSavedCardModel from "../models/GetTokenFromSavedCardModel";

export default class TapController {
  private readonly accessToken: string;
  private readonly router: NextRouter;

  constructor(accessToken: string, router: NextRouter) {
    this.accessToken = accessToken;
    this.router = router;
  }

  getTokenIdFromSavedCard = async (
    getTokenIdFromSavedCardModel: GetTokenIdFromSavedCardModel
  ) => {
    try {
      const {
        data: { body, result },
      }: AxiosResponse<IResponseModel> = await axios.post(
        tapEndpoints.getTokenIdFromSavedCard,
        getTokenIdFromSavedCardModel,
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

  createCustomer = async (createCustomerModel: CreateCustomerModel) => {
    try {
      const {
        data: { body, result },
      }: AxiosResponse<IResponseModel> = await axios.post(
        tapEndpoints.createCustomer,
        createCustomerModel,
        getConfigsWithAccessToken(this.accessToken)
      );

      if (result === 200) {
        return body;
      }
    } catch (error: any) {
      if (isResponseModel(error?.response?.data)) {
        if (error.response.data.result === 401) {
          this.router.push(AuthorizationRoutes.login);
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

  saveCard = async (saveCardModel: SaveCardModel) => {
    try {
      const {
        data: { body, result },
      }: AxiosResponse<IResponseModel> = await axios.post(
        tapEndpoints.saveCard,
        saveCardModel,
        getConfigsWithAccessToken(this.accessToken)
      );

      if (result === 200) {
        return body;
      }
    } catch (error: any) {
      if (isResponseModel(error?.response?.data)) {
        if (error.response.data.result === 401) {
          this.router.push(AuthorizationRoutes.login);
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

  getTokenFromSavedCards = async (
    getTokenFromSavedCardModel: GetTokenFromSavedCardModel
  ) => {
    try {
      const {
        data: { body, result },
      }: AxiosResponse<IResponseModel> = await axios.post(
        tapEndpoints.getTokenFromSavedCards,
        getTokenFromSavedCardModel,
        getConfigsWithAccessToken(this.accessToken)
      );

      if (result === 200) {
        return body;
      }
    } catch (error: any) {
      if (isResponseModel(error?.response?.data)) {
        if (error.response.data.result === 401) {
          this.router.push(AuthorizationRoutes.login);
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

  createSubscription = async (
    createSubscriptionModel: CreateSubscriptionModel
  ) => {
    try {
      const {
        data: { body, result },
      }: AxiosResponse<IResponseModel> = await axios.post(
        tapEndpoints.createSubsciption,
        createSubscriptionModel,
        getConfigsWithAccessToken(this.accessToken)
      );

      if (result === 200) {
        return body;
      }
    } catch (error: any) {
      if (isResponseModel(error?.response?.data)) {
        if (error.response.data.result === 401) {
          this.router.push(AuthorizationRoutes.login);
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

  getSubscription = async () => {
    try {
      const {
        data: { body, result },
      }: AxiosResponse<IResponseModel> = await axios.get(
        tapEndpoints.getSubscription,
        getConfigsWithAccessToken(this.accessToken)
      );

      if (result === 200) {
        return body;
      }
    } catch (error: any) {
      if (isResponseModel(error?.response?.data)) {
        if (error.response.data.result === 401) {
          this.router.push(AuthorizationRoutes.login);
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

  // postUrl = async (saveCardModel: SaveCardModel) => {
  //   try {
  //     const {
  //       data: { body, result },
  //     }: AxiosResponse<IResponseModel> = await axios.post(
  //       tapEndpoints.saveCard,
  //       saveCardModel,
  //       getConfigsWithAccessToken(this.accessToken)
  //     );

  //     if (result === 200) {
  //       return body;
  //     }
  //   } catch (error: any) {
  //     if (isResponseModel(error?.response?.data)) {
  //       if (error.response.data.result === 401) {
  //         this.router.push(AuthorizationRoutes.login);
  //       } else {
  //         toast.error(error.response.data.message);
  //       }
  //       return;
  //     } else {
  //       this.router.push(customPages.error);
  //       return;
  //     }
  //   }
  // };

  cancelSubscription = async () => {
    try {
      const {
        data: { body, result },
      }: AxiosResponse<IResponseModel> = await axios.delete(
        tapEndpoints.cancelSubscription,
        getConfigsWithAccessToken(this.accessToken)
      );

      if (result === 200) {
        return body;
      }
    } catch (error: any) {
      if (isResponseModel(error?.response?.data)) {
        if (error.response.data.result === 401) {
          this.router.push(AuthorizationRoutes.login);
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

  getSubscriptions = async () => {
    try {
      const {
        data: { body, result },
      }: AxiosResponse<IResponseModel> = await axios.get(
        tapEndpoints.getSubscriptions,
        getConfigsWithAccessToken(this.accessToken)
      );

      if (result === 200) {
        return body;
      }
    } catch (error: any) {
      if (isResponseModel(error?.response?.data)) {
        if (error.response.data.result === 401) {
          this.router.push(AuthorizationRoutes.login);
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
