import express, { type Express } from "express";
import { fetchPlayerCards } from "./supabase";

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
    } catch (error) {
      console.error(error);
      res.status(503).json({ status: "error", database: "unavailable" });
    }
  });

  app.get("/player-cards", async (_req, res) => {
    try {
      const data = await fetchPlayerCards();
      res.status(200).json({ data });
    } catch (error) {
      const message = error instanceof Error ? error.message : "Supabase request failed";
      console.error(error);
      res.status(503).json({ status: "error", message });
    }
  });

  return app;
}
