import { selectOne, selectRows } from "./query";
import type { Team } from "./types";

export class TeamRepository {
  list(): Promise<Team[]> {
    return selectRows<Team>("teams", [], { column: "id" });
  }

  findById(id: number): Promise<Team | null> {
    return selectOne<Team>("teams", "id", id);
  }
}
