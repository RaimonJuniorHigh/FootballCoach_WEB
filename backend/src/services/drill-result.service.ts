import { DrillResultRepository, type DrillResult } from "../repositories";

export class DrillResultService {
  constructor(private readonly drillResults = new DrillResultRepository()) {}

  listByPlayer(playerId: number): Promise<DrillResult[]> {
    return this.drillResults.listByPlayer(playerId);
  }
}
