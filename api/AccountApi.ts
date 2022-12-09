import { baseUrl } from "../constants";

export const accountEndpoints = {
  getAccounts: (page: number, size: number) =>
    `${baseUrl}Account/getList?page=${page}&size=${size}`,
  addAdmin: `${baseUrl}Account/register-admin`,
  updateAccount: (id: string) => `${baseUrl}Account/update/${id}`,
  getAccount: (id: string) => `${baseUrl}Account/get/${id}`,
  getAllAccounts: `${baseUrl}Account/getList-export`,
  activateAccount: (id: string) => `${baseUrl}Account/activate?accountId=${id}`,
  toggleAccountSuspention: (id: string) =>
    `${baseUrl}Account/toggle-suspension?accountId=${id}`,
};
