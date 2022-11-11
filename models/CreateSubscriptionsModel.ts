export default class CreateSubscriptionsModel {
  public accountId: string;
  public sourceId: string;
  constructor(accountId: string, sourceId: string) {
    this.accountId = accountId;
    this.sourceId = sourceId;
  }
}
