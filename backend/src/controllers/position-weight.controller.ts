import type { NextFunction, Request, Response } from "express";
import { PositionWeightService } from "../services";

export class PositionWeightController {
  constructor(private readonly positionWeights = new PositionWeightService()) {}

  list = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const position = readPosition(req.query.position);
      const data = await this.positionWeights.list(position);
      res.status(200).json({ data });
    } catch (error) {
      next(error);
    }
  };
}

function readPosition(value: unknown): string | undefined {
  if (typeof value !== "string") return undefined;
  const position = value.trim();
  return position === "" ? undefined : position;
}
