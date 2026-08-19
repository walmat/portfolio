import { NextResponse } from "next/server";
import { isAuthorized, unauthorized } from "../reauth-guard";

// Step 1 of reauthorization — for me, not for visitors. Only needed if the
// stored refresh token ever dies (six-month expiry) without a rotation having
// been persisted first. Reachable only with SPOTIFY_REAUTH_SECRET:
//   /api/spotify/login?secret=...
export async function GET(request: Request) {
  if (!isAuthorized(request)) {
    return unauthorized();
  }

  const client_id = process.env.SPOTIFY_CLIENT_ID;
  const redirect_uri = new URL("/api/spotify/callback", request.url).toString();

  if (!client_id) {
    return NextResponse.json({ error: "SPOTIFY_CLIENT_ID is not set" }, { status: 500 });
  }

  const params = new URLSearchParams({
    response_type: "code",
    client_id,
    redirect_uri,
    scope: "user-read-currently-playing user-read-recently-played",
    state: process.env.SPOTIFY_REAUTH_SECRET || "",
  });

  return NextResponse.redirect(`https://accounts.spotify.com/authorize?${params}`);
}
