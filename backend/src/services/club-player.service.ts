import { ClubPlayerRepository, type ClubPlayer } from "../repositories";

export class ClubPlayerService {
  constructor(private readonly clubPlayers = new ClubPlayerRepository()) {}

  list(): Promise<ClubPlayer[]> {
    return this.clubPlayers.list();
  }
}
