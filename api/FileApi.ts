import { baseUrl } from "../constants";

export const fileEndpoints = {
  getFiles: `${baseUrl}}File/getList`,
  addFile: `${baseUrl}File/create`,
  editFile: (id: string) => `${baseUrl}File/update/${id}`,
};
