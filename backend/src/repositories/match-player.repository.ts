import { selectRows } from "./query";
import type { MatchPlayer } from "./types";

export class MatchPlayerRepository {
  listByMatch(matchId: number): Promise<MatchPlayer[]> {
    return selectRows<MatchPlayer>("match_players", [{ column: "match_id", value: matchId }], {
      column: "player_id",
    });
  }
}
