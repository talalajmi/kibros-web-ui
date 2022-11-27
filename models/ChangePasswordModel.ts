export default class ChangePasswordModel {
  public AccountId: string;
  public NewPassword: string;
  constructor(AccountId: string, NewPassword: string) {
    this.AccountId = AccountId;
    this.NewPassword = NewPassword;
  }
}
