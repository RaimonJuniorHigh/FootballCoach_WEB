import { selectRows } from "./query";
import type { DrillResult } from "./types";

export class DrillResultRepository {
  listByPlayer(playerId: number): Promise<DrillResult[]> {
    return selectRows<DrillResult>("drill_results", [{ column: "player_id", value: playerId }], {
      column: "recorded_on",
      ascending: false,
    });
  }
}
