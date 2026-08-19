import { NextResponse } from "next/server";

// The reauth routes are private maintenance endpoints. Without a configured
// secret they stay closed rather than falling open.
export function isAuthorized(request: Request): boolean {
  const secret = process.env.SPOTIFY_REAUTH_SECRET;
  if (!secret) return false;

  const params = new URL(request.url).searchParams;
  // Spotify echoes `state` back on the callback, so the same secret carries
  // through both legs of the flow.
  return params.get("secret") === secret || params.get("state") === secret;
}

// Indistinguishable from a route that does not exist.
export function unauthorized(): NextResponse {
  return new NextResponse("Not Found", { status: 404 });
}
