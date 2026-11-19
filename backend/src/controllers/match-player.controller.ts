import type { NextFunction, Request, Response } from "express";
import { MatchPlayerService } from "../services";
import { parsePositiveInt } from "./params";

export class MatchPlayerController {
  constructor(private readonly matchPlayers = new MatchPlayerService()) {}

  listByMatch = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const matchId = parsePositiveInt(req.params.matchId, "matchId");
      const data = await this.matchPlayers.listByMatch(matchId);
      res.status(200).json({ data });
    } catch (error) {
      next(error);
    }
  };
}
