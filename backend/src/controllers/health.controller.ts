import type { NextFunction, Request, Response } from "express";

export class HealthController {
  constructor(private readonly checkDatabase?: () => Promise<void>) {}

  get = async (_req: Request, res: Response, _next: NextFunction): Promise<void> => {
    if (!this.checkDatabase) {
      res.status(200).json({ status: "ok" });
      return;
    }

    try {
      await this.checkDatabase();
      res.status(200).json({ status: "ok", database: "connected" });
    } catch (error) {
      console.error(error);
      res.status(503).json({ status: "error", database: "unavailable" });
    }
  };
}
