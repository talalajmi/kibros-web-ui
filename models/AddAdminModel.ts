export default class AddAdminModel {
  public email: string;
  public firstname: string;
  public lastname: string;
  public PhoneNumber: string;
  public Country: string;
  public role: string;
  constructor(
    email: string,
    firstname: string,
    lastname: string,
    PhoneNumber: string,
    Country: string,
    role: string
  ) {
    this.email = email;
    this.firstname = firstname;
    this.lastname = lastname;
    this.PhoneNumber = PhoneNumber;
    this.Country = Country;
    this.role = role;
  }
}
