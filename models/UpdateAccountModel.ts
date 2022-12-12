export default class UpdateAccountModel {
  public firstname: string;
  public lastname: string;
  public PhoneNumber: string;
  public Country: string;
  public role: number;
  public IsSuspended: boolean;
  constructor(
    firstname: string,
    lastname: string,
    PhoneNumber: string,
    Country: string,
    role: number,
    IsSuspended: boolean
  ) {
    this.firstname = firstname;
    this.lastname = lastname;
    this.PhoneNumber = PhoneNumber;
    this.Country = Country;
    this.role = role;
    this.IsSuspended = IsSuspended;
  }
}
