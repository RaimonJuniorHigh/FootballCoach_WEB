import { PositionWeightRepository, type PositionWeight } from "../repositories";

export class PositionWeightService {
  constructor(private readonly positionWeights = new PositionWeightRepository()) {}

  list(position?: string): Promise<PositionWeight[]> {
    return this.positionWeights.list(position);
  }
}
