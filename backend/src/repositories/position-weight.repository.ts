import { selectRows } from "./query";
import type { PositionWeight } from "./types";

export class PositionWeightRepository {
  list(position?: string): Promise<PositionWeight[]> {
    const filters = position ? [{ column: "position", value: position }] : [];
    return selectRows<PositionWeight>("position_weights", filters, { column: "stat" });
  }
}
