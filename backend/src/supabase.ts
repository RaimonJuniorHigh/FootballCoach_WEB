import { createClient, type SupabaseClient } from "@supabase/supabase-js";

type MemoryStorage = {
  getItem: (key: string) => string | null;
  setItem: (key: string, value: string) => void;
  removeItem: (key: string) => void;
};

function createMemoryStorage(): MemoryStorage {
  const values = new Map<string, string>();

  return {
    getItem: (key) => values.get(key) ?? null,
    setItem: (key, value) => {
      values.set(key, value);
    },
    removeItem: (key) => {
      values.delete(key);
    },
  };
}

let client: SupabaseClient | undefined;
let sessionReady: Promise<void> | undefined;

export function getClient(): SupabaseClient {
  if (client) return client;

  const url = process.env.SUPABASE_URL;
  const key = process.env.SUPABASE_KEY;

  if (!url || !key) {
    throw new Error("SUPABASE_URL and SUPABASE_KEY must be set");
  }

  // The session stays in memory for this process. A new anonymous user is
  // created only when that session is missing.
  client = createClient(url, key, {
    auth: {
      persistSession: true,
      autoRefreshToken: true,
      detectSessionInUrl: false,
      storage: createMemoryStorage(),
    },
  });

  return client;
}

async function signInIfNeeded(): Promise<void> {
  const supabase = getClient();
  const { data, error: sessionError } = await supabase.auth.getSession();

  if (sessionError) throw sessionError;
  if (data.session) return;

  const { error } = await supabase.auth.signInAnonymously();
  if (error) throw error;
}

export function ensureAnonymousSession(): Promise<void> {
  sessionReady ??= signInIfNeeded().catch((error: unknown) => {
    sessionReady = undefined;
    throw error;
  });

  return sessionReady;
}

export async function checkDatabase(): Promise<void> {
  await ensureAnonymousSession();

  const { error } = await getClient().from("teams").select("id").limit(1);
  if (error) throw error;
}
