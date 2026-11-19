import { NotFoundError } from "../errors";
import { MatchRepository, type Match } from "../repositories";

export class MatchService {
  constructor(private readonly matches = new MatchRepository()) {}

  listByTeam(teamId: number): Promise<Match[]> {
    return this.matches.listByTeam(teamId);
  }

  async get(id: number): Promise<Match> {
    const match = await this.matches.findById(id);
    if (!match) {
      throw new NotFoundError("Match not found");
    }
    return match;
  }
}
