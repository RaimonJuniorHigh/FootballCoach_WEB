import type { NextFunction, Request, Response } from "express";
import { PlayerService } from "../services";
import { parsePositiveInt } from "./params";

export class PlayerController {
  constructor(private readonly players = new PlayerService()) {}

  listByTeam = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const teamId = parsePositiveInt(req.params.teamId, "teamId");
      const data = await this.players.listByTeam(teamId);
      res.status(200).json({ data });
    } catch (error) {
      next(error);
    }
  };

  get = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const id = parsePositiveInt(req.params.id, "id");
      const data = await this.players.get(id);
      res.status(200).json({ data });
    } catch (error) {
      next(error);
    }
  };
}
