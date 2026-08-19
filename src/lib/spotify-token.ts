import { Redis } from "@upstash/redis";

const REFRESH_TOKEN_KEY = "spotify:refresh_token";

// Refresh tokens expire six months after issue (Spotify, July 2026), but Spotify
// hands back a replacement whenever it rotates one. Persisting that replacement
// keeps the six-month clock permanently reset, so the token never has to be
// re-minted by hand. Redis is the source of truth; SPOTIFY_REFRESH_TOKEN is only
// the seed value used before the first rotation is stored.
let redis: Redis | null = null;

function getRedis(): Redis | null {
  if (redis) return redis;
  if (!process.env.KV_REST_API_URL || !process.env.KV_REST_API_TOKEN) {
    return null;
  }
  redis = new Redis({
    url: process.env.KV_REST_API_URL,
    token: process.env.KV_REST_API_TOKEN,
  });
  return redis;
}

export async function readRefreshToken(): Promise<string | null> {
  const client = getRedis();

  if (client) {
    try {
      const stored = await client.get<string>(REFRESH_TOKEN_KEY);
      if (stored) return stored;
    } catch (e) {
      // A store outage shouldn't take the card down — fall back to the seed.
      console.error("[spotify] could not read token from store", e);
    }
  }

  return process.env.SPOTIFY_REFRESH_TOKEN || null;
}

export async function writeRefreshToken(token: string): Promise<void> {
  const client = getRedis();
  if (!client) {
    console.warn("[spotify] no token store configured — rotated token not persisted");
    return;
  }

  try {
    await client.set(REFRESH_TOKEN_KEY, token);
  } catch (e) {
    // The current token still works, so this is not fatal — but if it keeps
    // failing the stored token will eventually go stale and need a manual reauth.
    console.error("[spotify] could not persist rotated token", e);
  }
}
