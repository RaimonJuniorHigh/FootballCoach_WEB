import { StatTypeRepository, type StatType } from "../repositories";

export class StatTypeService {
  constructor(private readonly statTypes = new StatTypeRepository()) {}

  list(): Promise<StatType[]> {
    return this.statTypes.list();
  }
}
