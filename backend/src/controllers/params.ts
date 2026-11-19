import { HttpError } from "../errors";

export function parsePositiveInt(value: string | undefined, name: string): number {
  if (value === undefined || !/^[1-9]\d*$/.test(value)) {
    throw new HttpError(`Invalid ${name}`, 400);
  }

  const id = Number(value);
  if (!Number.isSafeInteger(id)) {
    throw new HttpError(`Invalid ${name}`, 400);
  }

  return id;
}
