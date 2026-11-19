import { ensureAnonymousSession, getClient } from "../supabase";

type FilterValue = string | number | boolean;

type Filter = {
  column: string;
  value: FilterValue;
};

type Order = {
  column: string;
  ascending?: boolean;
};

export async function selectRows<T>(table: string, filters: Filter[] = [], order?: Order): Promise<T[]> {
  await ensureAnonymousSession();

  let query = getClient().from(table).select("*");

  for (const filter of filters) {
    query = query.eq(filter.column, filter.value);
  }

  if (order) {
    query = query.order(order.column, { ascending: order.ascending ?? true });
  }

  const { data, error } = await query;
  if (error) throw error;
  return (data ?? []) as T[];
}

export async function selectOne<T>(table: string, column: string, value: FilterValue): Promise<T | null> {
  await ensureAnonymousSession();

  const { data, error } = await getClient().from(table).select("*").eq(column, value).maybeSingle();

  if (error) throw error;
  return data as T | null;
}
