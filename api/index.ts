import { authEndpoints } from "./AuthApi";
import { accountEndpoints } from "./AccountApi";
import { categoryEndpoints } from "./CategoryApi";
import { fileEndpoints } from "./FileApi";
import { newsletterEndpoints } from "./NewsletterApi";
import { subscriptionEndpoints } from "./SubscriptionApi";
import { passwordEndpoints } from "./PasswordApi";
import { lessonEndpoints } from "./LessonApi";
import { tapEndpoints } from "./TapApi";

const axiosConfigs = {
  headers: {
    Accept: "application/json",
  },
};

const getConfigsWithAccessToken = (accessToken: string) => {
  const configsWithAccessToken = {
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${accessToken}`,
    },
  };
  return configsWithAccessToken;
};

export {
  authEndpoints,
  accountEndpoints,
  categoryEndpoints,
  fileEndpoints,
  newsletterEndpoints,
  subscriptionEndpoints,
  passwordEndpoints,
  lessonEndpoints,
  tapEndpoints,
  axiosConfigs,
  getConfigsWithAccessToken,
};
