import { PlayerCardRepository, type PlayerCard } from "../repositories";

export class PlayerCardService {
  constructor(private readonly playerCards = new PlayerCardRepository()) {}

  list(): Promise<PlayerCard[]> {
    return this.playerCards.list();
  }
}
