import axios, { AxiosResponse } from "axios";
import { NextRouter } from "next/router";
import toast from "react-hot-toast";
import { isResponseModel } from "../helpers";
import { IResponseModel } from "../interfaces";
import { customPages } from "../routes";
import { getConfigsWithAccessToken } from "../api/index";
import { AuthorizationRoutes } from "../routes/AuthorizationRoutes";
import {
  SubscribeToNewsletterModel,
  UnsubscribeFromNewsletterModel,
} from "../models";
import { newsletterEndpoints } from "../api/NewsletterApi";

export default class NewsletterController {
  private readonly accessToken: string;
  private readonly router: NextRouter;

  constructor(accessToken: string, router: NextRouter) {
    this.accessToken = accessToken;
    this.router = router;
  }

  getEmailList = async () => {
    try {
      const {
        data: { body, result },
      }: AxiosResponse<IResponseModel> = await axios.get(
        newsletterEndpoints.getEmailList,
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

  subscribeToNewsletter = async (
    subscribeToNewsletterModel: SubscribeToNewsletterModel
  ) => {
    try {
      const {
        data: { body, result },
      }: AxiosResponse<IResponseModel> = await axios.post(
        newsletterEndpoints.subscribeToNewsletter,
        subscribeToNewsletterModel,
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

  unsubscribeFromNewsletter = async (
    unsubscribeFromNewsletterModel: UnsubscribeFromNewsletterModel
  ) => {
    try {
      const {
        data: { body, result },
      }: AxiosResponse<IResponseModel> = await axios.post(
        newsletterEndpoints.unubscribeFromNewsletter,
        unsubscribeFromNewsletterModel,
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
