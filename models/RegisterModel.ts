export default class RegisterModel {
  public email: string;
  public password: string;
  public firstname: string;
  public lastname: string;
  public PhoneNumber: string;
  public Country: string;
  constructor(
    email: string,
    password: string,
    firstname: string,
    lastname: string,
    PhoneNumber: string,
    Country: string
  ) {
    this.email = email;
    this.password = password;
    this.firstname = firstname;
    this.lastname = lastname;
    this.PhoneNumber = PhoneNumber;
    this.Country = Country;
  }
}
