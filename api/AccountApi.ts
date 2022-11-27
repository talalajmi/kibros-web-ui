import { baseUrl } from "../constants";

export const accountEndpoints = {
  getAllAccounts: `https://ki.majdalkayyal.com/api/Account/getList`,
  addAdmin: `https://ki.majdalkayyal.com/api/Account/register-admin`,
  getAccount: (id: string) => `${baseUrl}Account/get/${id}`,
  activateAccount: (id: string) => `${baseUrl}Account/activate?accountId=${id}`,
};
