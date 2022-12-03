import axios, { AxiosResponse } from "axios";
import { NextRouter } from "next/router";
import { subscriptionEndpoints } from "../api";
import { isResponseModel } from "../helpers";
import { IResponseModel } from "../interfaces";
import { customPages } from "../routes";
import { getConfigsWithAccessToken } from "../api/index";
import { AuthorizationRoutes } from "../routes/AuthorizationRoutes";
import CreateSubscriptionsModel from "../models/CancelSubscriptionsModel";
import CancelSubscriptionsModel from "../models/CancelSubscriptionsModel";
import { toast } from "react-toastify";

export default class SubscriptionController {
  private readonly accessToken: string;
  private readonly router: NextRouter;

  constructor(accessToken: string, router: NextRouter) {
    this.accessToken = accessToken;
    this.router = router;
  }

  getSubscriptionById = async (subscriptionId: string) => {
    try {
      const {
        data: { body, result },
      }: AxiosResponse<IResponseModel> = await axios.get(
        subscriptionEndpoints.getSubscriptionById(subscriptionId),
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

  createSubscription = async (createSubscription: CreateSubscriptionsModel) => {
    const t = toast.loading("Creating subscription...", { toastId: "loading" });
    try {
      const {
        data: { body, result },
      }: AxiosResponse<IResponseModel> = await axios.post(
        subscriptionEndpoints.createSubscription,
        createSubscription,
        getConfigsWithAccessToken(this.accessToken)
      );

      if (result === 200) {
        toast.update(t, {
          render: "Subscribed Successfully",
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

  cancelSubscription = async (
    cancelSubscriptionModel: CancelSubscriptionsModel
  ) => {
    const t = toast.loading("Cancelling subscriptiont...", {
      toastId: "loading",
    });
    try {
      const {
        data: { body, result },
      }: AxiosResponse<IResponseModel> = await axios.post(
        subscriptionEndpoints.cancelSubscription,
        cancelSubscriptionModel,
        getConfigsWithAccessToken(this.accessToken)
      );

      if (result === 200) {
        toast.update(t, {
          render: "Subscription Cancelled",
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
}
