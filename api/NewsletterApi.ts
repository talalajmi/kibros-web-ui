import { baseUrl } from "../constants";

export const newsletterEndpoints = {
  getEmailList: `${baseUrl}}NewsLetter/getList`,
  subscribeToNewsletter: `${baseUrl}NewsLetter/sub`,
  unubscribeFromNewsletter: `${baseUrl}NewsLetter/unsub`,
};
