import { baseUrl } from "../constants";

export const accountEndpoints = {
  getAllAccounts: `${baseUrl}Account/getList`,
  addAdmin: `${baseUrl}Account/register-admin`,
  updateAccount: (id: string) => `${baseUrl}Account/update/${id}`,
  getAccount: (id: string) => `${baseUrl}Account/get/${id}`,
  activateAccount: (id: string) => `${baseUrl}Account/activate?accountId=${id}`,
};
