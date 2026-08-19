import { NextResponse } from "next/server";
import { writeRefreshToken } from "@/lib/spotify-token";
import { isAuthorized, unauthorized } from "../reauth-guard";

// Step 2 of reauthorization: trade the code for a fresh refresh token and write
// it straight to the store, so there is no token to copy by hand.
export async function GET(request: Request) {
  if (!isAuthorized(request)) {
    return unauthorized();
  }

  const client_id = process.env.SPOTIFY_CLIENT_ID;
  const client_secret = process.env.SPOTIFY_CLIENT_SECRET;
  const code = new URL(request.url).searchParams.get("code");

  if (!code) {
    return NextResponse.json({ error: "Missing authorization code" }, { status: 400 });
  }

  const basic = Buffer.from(`${client_id}:${client_secret}`).toString("base64");

  const response = await fetch("https://accounts.spotify.com/api/token", {
    method: "POST",
    headers: {
      Authorization: `Basic ${basic}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams({
      grant_type: "authorization_code",
      code,
      redirect_uri: new URL("/api/spotify/callback", request.url).toString(),
    }),
  });

  const data = await response.json();

  if (!response.ok || !data.refresh_token) {
    return NextResponse.json({ error: "Token exchange failed" }, { status: 500 });
  }

  await writeRefreshToken(data.refresh_token);

  return NextResponse.json({ ok: true, message: "Refresh token stored. Nothing to copy." });
}
