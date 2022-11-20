import { authEndpoints } from "./AuthApi";
import { accountEndpoints } from "./AccountApi";

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL as string;
const apiUrl = process.env.NEXT_PUBLIC_API_URL as string;

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
  baseUrl,
  apiUrl,
  axiosConfigs,
  getConfigsWithAccessToken,
};
