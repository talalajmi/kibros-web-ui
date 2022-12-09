import { baseUrl } from "../constants";

export const accountEndpoints = {
  getAllAccounts: (page: number, size: number) =>
    `${baseUrl}Account/getList?page=${page}&size=${size}`,
  addAdmin: `${baseUrl}Account/register-admin`,
  updateAccount: (id: string) => `${baseUrl}Account/update/${id}`,
  getAccount: (id: string) => `${baseUrl}Account/get/${id}`,
  activateAccount: (id: string) => `${baseUrl}Account/activate?accountId=${id}`,
};
