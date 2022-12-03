import axios, { AxiosResponse } from "axios";
import { NextRouter } from "next/router";
import { isResponseModel } from "../helpers";
import { IResponseModel } from "../interfaces";
import { customPages } from "../routes";
import { axiosConfigs, getConfigsWithAccessToken } from "../api/index";
import { AuthorizationRoutes } from "../routes/AuthorizationRoutes";
import {
  SubscribeToNewsletterModel,
  UnsubscribeFromNewsletterModel,
} from "../models";
import { newsletterEndpoints } from "../api/NewsletterApi";
import { toast } from "react-toastify";

export default class NewsletterController {
  private readonly router: NextRouter;

  constructor(router: NextRouter) {
    this.router = router;
  }

  getEmailList = async () => {
    try {
      const {
        data: { body, result },
      }: AxiosResponse<IResponseModel> = await axios.get(
        newsletterEndpoints.getEmailList,
        axiosConfigs
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

  subscribeToNewsletter = async (
    subscribeToNewsletterModel: SubscribeToNewsletterModel
  ) => {
    toast.loading("Subscribing to newsletter...", {
      toastId: "loading",
    });
    try {
      const {
        data: { body, result },
      }: AxiosResponse<IResponseModel> = await axios.post(
        newsletterEndpoints.subscribeToNewsletter,
        subscribeToNewsletterModel,
        axiosConfigs
      );

      if (result === 200) {
        toast.dismiss("loading");
        toast.success("Subscribed to newsletter");
        return body;
      }
    } catch (error: any) {
      toast.dismiss("loading");
      if (isResponseModel(error?.response?.data)) {
        if (error.response.data.result === 401) {
          this.router.push(AuthorizationRoutes.logout);
        } else {
          toast.update(error.response.data.message);
        }
        return;
      } else {
        this.router.push(customPages.error);
        return;
      }
    }
  };

  unsubscribeFromNewsletter = async (
    unsubscribeFromNewsletterModel: UnsubscribeFromNewsletterModel
  ) => {
    try {
      const {
        data: { body, result },
      }: AxiosResponse<IResponseModel> = await axios.post(
        newsletterEndpoints.unubscribeFromNewsletter,
        unsubscribeFromNewsletterModel,
        axiosConfigs
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
