import express, { type Express } from "express";

type CreateAppOptions = {
  checkDatabase?: () => Promise<void>;
};

export function createApp(options: CreateAppOptions = {}): Express {
  const app = express();

  app.get("/health", async (_req, res) => {
    if (!options.checkDatabase) {
      res.status(200).json({ status: "ok" });
      return;
    }

    try {
      await options.checkDatabase();
      res.status(200).json({ status: "ok", database: "connected" });
    } catch {
      res.status(503).json({ status: "error", database: "unavailable" });
    }
  });

  return app;
}
