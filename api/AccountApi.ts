import { baseUrl } from "../constants";

export const accountEndpoints = {
  getAllAccounts: `${baseUrl}Account/getList`,
  addAdmin: `${baseUrl}Account/register-admin`,
  getAccount: (id: string) => `${baseUrl}Account/get/${id}`,
  activateAccount: (id: string) => `${baseUrl}Account/activate?accountId=${id}`,
};
