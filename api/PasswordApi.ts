import { baseUrl } from "../constants";

export const passwordEndpoints = {
  createForgetPasswordRequest: `${baseUrl}ForgetPassword/create`,
  changePassword: `${baseUrl}ForgetPassword/change`,
};
