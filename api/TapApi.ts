import { baseUrl, tapUrl } from "../constants";

export const tapEndpoints = {
  getTokenIdFromSavedCard: `tokens`,
  createCustomer: `${tapUrl}customers`,
  saveCard: `${tapUrl}card/cus_TS072620222317Rr5l0611813`,
  getTokenFromSavedCards: `${tapUrl}tokens`,
  createSubsciption: `${tapUrl}subscription/v1`,
  getSubscription: `${tapUrl}subscription/v1/sub_Hy104820222100u8MP1111742`,
  posturl: `${baseUrl}TapSub`,
  cancelSubscription: `${tapUrl}subscription/v1/sub_c2D15120222104y8ZJ0611333`,
  getSubscriptions: `${tapUrl}subscription/v1/sub_l1M52820222211Dl5j0611457`,
};
