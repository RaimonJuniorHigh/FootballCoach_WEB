import { selectRows } from "./query";
import type { PlayerCard } from "./types";

export class PlayerCardRepository {
  list(): Promise<PlayerCard[]> {
    return selectRows<PlayerCard>("player_cards");
  }
}
