import express, { type ErrorRequestHandler, type Express } from "express";
import {
  ClubPlayerController,
  DrillResultController,
  HealthController,
  MatchController,
  MatchPlayerController,
  PlayerCardController,
  PlayerController,
  PositionWeightController,
  StatTypeController,
  TeamController,
} from "./controllers";
import { HttpError } from "./errors";

type CreateAppOptions = {
  checkDatabase?: () => Promise<void>;
};

export function createApp(options: CreateAppOptions = {}): Express {
  const app = express();
  registerRoutes(app, options);
  app.use(errorMiddleware);
  return app;
}

function registerRoutes(app: Express, options: CreateAppOptions): void {
  const health = new HealthController(options.checkDatabase);
  const teams = new TeamController();
  const players = new PlayerController();
  const clubPlayers = new ClubPlayerController();
  const matches = new MatchController();
  const matchPlayers = new MatchPlayerController();
  const drillResults = new DrillResultController();
  const statTypes = new StatTypeController();
  const positionWeights = new PositionWeightController();
  const playerCards = new PlayerCardController();

  app.get("/health", health.get);
  app.get("/teams", teams.list);
  app.get("/teams/:id", teams.get);
  app.get("/teams/:teamId/players", players.listByTeam);
  app.get("/teams/:teamId/matches", matches.listByTeam);
  app.get("/players/:id", players.get);
  app.get("/players/:playerId/drill-results", drillResults.listByPlayer);
  app.get("/club-players", clubPlayers.list);
  app.get("/matches/:id", matches.get);
  app.get("/matches/:matchId/players", matchPlayers.listByMatch);
  app.get("/stat-types", statTypes.list);
  app.get("/position-weights", positionWeights.list);
  app.get("/player-cards", playerCards.list);
}

const errorMiddleware: ErrorRequestHandler = (error, _req, res, _next) => {
  if (error instanceof HttpError) {
    res.status(error.status).json({ status: "error", message: error.message });
    return;
  }

  console.error(error);
  res.status(503).json({ status: "error", message: "Supabase request failed" });
};
