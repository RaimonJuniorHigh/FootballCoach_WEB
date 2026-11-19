import { selectOne, selectRows } from "./query";
import type { Player } from "./types";

export class PlayerRepository {
  listByTeam(teamId: number): Promise<Player[]> {
    return selectRows<Player>("players", [{ column: "team_id", value: teamId }], { column: "name" });
  }

  findById(id: number): Promise<Player | null> {
    return selectOne<Player>("players", "id", id);
  }
}
