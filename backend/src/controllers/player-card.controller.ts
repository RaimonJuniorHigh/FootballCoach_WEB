import type { NextFunction, Request, Response } from "express";
import { PlayerCardService } from "../services";

export class PlayerCardController {
  constructor(private readonly playerCards = new PlayerCardService()) {}

  list = async (_req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const data = await this.playerCards.list();
      res.status(200).json({ data });
    } catch (error) {
      next(error);
    }
  };
}
