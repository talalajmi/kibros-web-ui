interface IPhone {
  country_code: string;
  number: string;
}

export default class CreateCustomerModel {
  public first_name: string;
  public last_name: string;
  public email: string;
  public phone: IPhone;
  constructor(
    first_name: string,
    last_name: string,
    email: string,
    phone: IPhone
  ) {
    this.first_name = first_name;
    this.last_name = last_name;
    this.email = email;
    this.phone = phone;
  }
}
