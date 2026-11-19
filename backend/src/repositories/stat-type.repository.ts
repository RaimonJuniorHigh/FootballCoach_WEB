import { selectRows } from "./query";
import type { StatType } from "./types";

export class StatTypeRepository {
  list(): Promise<StatType[]> {
    return selectRows<StatType>("stat_types", [], { column: "code" });
  }
}
