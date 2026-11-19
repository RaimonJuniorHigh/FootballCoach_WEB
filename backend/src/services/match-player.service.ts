import { MatchPlayerRepository, type MatchPlayer } from "../repositories";

export class MatchPlayerService {
  constructor(private readonly matchPlayers = new MatchPlayerRepository()) {}

  listByMatch(matchId: number): Promise<MatchPlayer[]> {
    return this.matchPlayers.listByMatch(matchId);
  }
}
