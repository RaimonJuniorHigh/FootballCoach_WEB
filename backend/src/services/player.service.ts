import { NotFoundError } from "../errors";
import { PlayerRepository, type Player } from "../repositories";

export class PlayerService {
  constructor(private readonly players = new PlayerRepository()) {}

  listByTeam(teamId: number): Promise<Player[]> {
    return this.players.listByTeam(teamId);
  }

  async get(id: number): Promise<Player> {
    const player = await this.players.findById(id);
    if (!player) {
      throw new NotFoundError("Player not found");
    }
    return player;
  }
}
