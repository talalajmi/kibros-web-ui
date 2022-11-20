export interface IAdmin {
  id: string;
  firstname: string;
  lastname: string;
  email: string;
  hashedPassword: string;
  role: number;
  registerationTime: string;
  country: string;
  phoneNumber: string;
  isEmailActivated: boolean;
  isSuspended: boolean;
  tapCustomerId: string;
  tapCardId: null;
  fullName: string;
  subsecriptions: null;
}
