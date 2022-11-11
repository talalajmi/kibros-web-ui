import { ITerm } from "../interfaces";

interface Charge {
  id: string;
  amount: number;
  currency: string;
  description: string;
  reference: {};
  receipt: {
    email: boolean;
    sms: boolean;
  };
  customer: {
    id: string;
  };
  source: {
    id: string;
  };
  post: {
    url: string;
  };
  subscription_id: string;
  transaction: {
    timezone: string;
    created: string;
  };
  status: string;
  merchant: {
    id: string;
  };
}

export default class PostUrlModel {
  public id: string;
  public status: string;
  public merchant_id: string;
  public term: ITerm;
  public charge: Charge;
  constructor(
    id: string,
    status: string,
    merchant_id: string,
    term: ITerm,
    charge: Charge
  ) {
    this.id = id;
    this.status = status;
    this.merchant_id = merchant_id;
    this.term = term;
    this.charge = charge;
  }
}
