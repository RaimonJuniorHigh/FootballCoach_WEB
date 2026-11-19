import type { NextFunction, Request, Response } from "express";
import { MatchService } from "../services";
import { parsePositiveInt } from "./params";

export class MatchController {
  constructor(private readonly matches = new MatchService()) {}

  listByTeam = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const teamId = parsePositiveInt(req.params.teamId, "teamId");
      const data = await this.matches.listByTeam(teamId);
      res.status(200).json({ data });
    } catch (error) {
      next(error);
    }
  };

  get = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const id = parsePositiveInt(req.params.id, "id");
      const data = await this.matches.get(id);
      res.status(200).json({ data });
    } catch (error) {
      next(error);
    }
  };
}
