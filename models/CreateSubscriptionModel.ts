import { ICharge, ITerm } from "../interfaces";

export default class CreateSubscriptionModel {
  public term: ITerm;
  public charge: ICharge;
  constructor(term: ITerm, charge: ICharge) {
    this.term = term;
    this.charge = charge;
  }
}
