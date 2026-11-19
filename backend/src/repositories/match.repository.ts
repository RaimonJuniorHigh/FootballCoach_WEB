import { selectOne, selectRows } from "./query";
import type { Match } from "./types";

export class MatchRepository {
  listByTeam(teamId: number): Promise<Match[]> {
    return selectRows<Match>("matches", [{ column: "team_id", value: teamId }], {
      column: "played_on",
      ascending: false,
    });
  }

  findById(id: number): Promise<Match | null> {
    return selectOne<Match>("matches", "id", id);
  }
}
