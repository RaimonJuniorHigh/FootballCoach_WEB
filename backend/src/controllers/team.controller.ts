import type { NextFunction, Request, Response } from "express";
import { TeamService } from "../services";
import { parsePositiveInt } from "./params";

export class TeamController {
  constructor(private readonly teams = new TeamService()) {}

  list = async (_req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const data = await this.teams.list();
      res.status(200).json({ data });
    } catch (error) {
      next(error);
    }
  };

  get = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const id = parsePositiveInt(req.params.id, "id");
      const data = await this.teams.get(id);
      res.status(200).json({ data });
    } catch (error) {
      next(error);
    }
  };
}
