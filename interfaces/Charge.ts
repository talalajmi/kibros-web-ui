export interface ICharge {
  amount: number;
  currency: string;
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
}
