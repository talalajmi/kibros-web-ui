import { ISavedCard } from "../interfaces";

export default class GetTokenIdFromSavedCardModel {
  public saved_card: ISavedCard;
  constructor(saved_card: ISavedCard) {
    this.saved_card = saved_card;
  }
}
