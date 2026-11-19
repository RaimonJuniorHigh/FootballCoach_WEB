import type { NextFunction, Request, Response } from "express";
import { StatTypeService } from "../services";

export class StatTypeController {
  constructor(private readonly statTypes = new StatTypeService()) {}

  list = async (_req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const data = await this.statTypes.list();
      res.status(200).json({ data });
    } catch (error) {
      next(error);
    }
  };
}
