import { IResponseModel } from "../interfaces";

export const isResponseModel = (obj: any): obj is IResponseModel => {
  if (obj === undefined || obj === "") {
    return false;
  } else {
    return "result" in obj && "body" in obj && "message" in obj;
  }
};
