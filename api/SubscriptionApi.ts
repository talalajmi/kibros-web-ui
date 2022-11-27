import { baseUrl } from "../constants";

export const subscriptionEndpoints = {
  getSubscriptionById: (id: string) => `${baseUrl}}Subsecription/get/${id}`,
  createSubscription: `${baseUrl}Subsecription/create`,
  cancelSubscription: `${baseUrl}Subsecription/cancel`,
};
