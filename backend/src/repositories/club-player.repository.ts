import { selectRows } from "./query";
import type { ClubPlayer } from "./types";

export class ClubPlayerRepository {
  list(): Promise<ClubPlayer[]> {
    return selectRows<ClubPlayer>("club_players", [], { column: "name" });
  }
}
