import { Pool } from "pg";

let pool: Pool | undefined;

function createPool(): Pool {
  const connectionString = process.env.DATABASE_URL;

  if (!connectionString) {
    throw new Error("DATABASE_URL is not set");
  }

  return new Pool({
    connectionString,
    ssl: process.env.DATABASE_SSL === "true" ? { rejectUnauthorized: true } : undefined,
  });
}

export function getPool(): Pool {
  pool ??= createPool();
  return pool;
}

export async function checkDatabase(): Promise<void> {
  const client = await getPool().connect();

  try {
    await client.query("SELECT 1");
  } finally {
    client.release();
  }
}
