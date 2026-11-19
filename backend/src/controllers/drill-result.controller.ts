import type { NextFunction, Request, Response } from "express";
import { DrillResultService } from "../services";
import { parsePositiveInt } from "./params";

export class DrillResultController {
  constructor(private readonly drillResults = new DrillResultService()) {}

  listByPlayer = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const playerId = parsePositiveInt(req.params.playerId, "playerId");
      const data = await this.drillResults.listByPlayer(playerId);
      res.status(200).json({ data });
    } catch (error) {
      next(error);
    }
  };
}
