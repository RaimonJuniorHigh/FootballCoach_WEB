export type Team = {
  id: number;
  name: string;
  training_days: string[];
  session_minutes: number;
  invite_code: string;
  owner_id: string;
  created_at: string;
};

export type Player = {
  id: number;
  team_id: number;
  name: string;
  position: string;
  attendance: string;
  created_at: string;
};

export type ClubPlayer = {
  id: number;
  name: string;
  position: string;
};

export type Match = {
  id: number;
  team_id: number;
  opponent: string;
  played_on: string;
  home: boolean;
  goals_for: number;
  goals_against: number;
};

export type MatchPlayer = {
  match_id: number;
  player_id: number;
  minutes: number;
  goals: number;
  assists: number;
};

export type DrillResult = {
  id: number;
  player_id: number;
  stat: string;
  drill: string;
  attempts: number;
  successes: number;
  recorded_on: string;
};

export type StatType = {
  code: string;
  label: string;
  drill: string;
};

export type PositionWeight = {
  position: string;
  stat: string;
  weight: number;
};

export type PlayerCard = Record<string, unknown>;
