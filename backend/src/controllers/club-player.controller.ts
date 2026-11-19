import type { NextFunction, Request, Response } from "express";
import { ClubPlayerService } from "../services";

export class ClubPlayerController {
  constructor(private readonly clubPlayers = new ClubPlayerService()) {}

  list = async (_req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const data = await this.clubPlayers.list();
      res.status(200).json({ data });
    } catch (error) {
      next(error);
    }
  };
}
