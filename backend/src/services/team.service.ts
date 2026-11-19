import { NotFoundError } from "../errors";
import { TeamRepository, type Team } from "../repositories";

export class TeamService {
  constructor(private readonly teams = new TeamRepository()) {}

  list(): Promise<Team[]> {
    return this.teams.list();
  }

  async get(id: number): Promise<Team> {
    const team = await this.teams.findById(id);
    if (!team) {
      throw new NotFoundError("Team not found");
    }
    return team;
  }
}
