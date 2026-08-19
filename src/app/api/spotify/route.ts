import { NextResponse } from "next/server";
import { readRefreshToken, writeRefreshToken } from "@/lib/spotify-token";

const client_id = process.env.SPOTIFY_CLIENT_ID;
const client_secret = process.env.SPOTIFY_CLIENT_SECRET;

const basic = Buffer.from(`${client_id}:${client_secret}`).toString("base64");
const TOKEN_ENDPOINT = `https://accounts.spotify.com/api/token`;

const NOW_PLAYING_ENDPOINT = `https://api.spotify.com/v1/me/player/currently-playing?additional_types=track,episode`;
const RECENTLY_PLAYED_ENDPOINT = `https://api.spotify.com/v1/me/player/recently-played`;

interface SpotifySong {
  name: string;
  href: string;
  progress: number;
  duration: number;
}

interface SpotifyAlbum {
  name: string;
  href: string;
}

interface SpotifyArtist {
  name: string;
  href: string;
}

interface SpotifyResponse {
  id: string;
  isPlaying: boolean;
  timestamp: number;
  image: string;
  song: SpotifySong | null;
  album: SpotifyAlbum | null;
  artist: SpotifyArtist | null;
}

const EMPTY: SpotifyResponse = {
  id: "",
  isPlaying: false,
  timestamp: -1,
  image: "",
  song: null,
  album: null,
  artist: null,
};

// Refresh tokens expire six months after they are issued (Spotify, July 2026).
// An expired token comes back as `invalid_grant` and is never going to work
// again — the stored token has to be discarded and re-minted via /api/spotify/login.
class SpotifyReauthError extends Error {
  constructor(description?: string) {
    super(`Spotify refresh token rejected: ${description || "invalid_grant"}`);
    this.name = "SpotifyReauthError";
  }
}

const getAccessToken = async () => {
  const refresh_token = await readRefreshToken();

  if (!refresh_token) {
    throw new SpotifyReauthError("no refresh token stored");
  }

  const response = await fetch(TOKEN_ENDPOINT, {
    method: "POST",
    headers: {
      Authorization: `Basic ${basic}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams({
      grant_type: "refresh_token",
      refresh_token,
    }),
  });

  const data = await response.json();

  if (!response.ok || !data.access_token) {
    if (data.error === "invalid_grant") {
      throw new SpotifyReauthError(data.error_description);
    }
    throw new Error(`Spotify token request failed (${response.status}): ${data.error}`);
  }

  // Spotify rotates the refresh token periodically. Persisting the new one
  // restarts its six-month expiry, so the flow renews itself indefinitely.
  if (data.refresh_token && data.refresh_token !== refresh_token) {
    await writeRefreshToken(data.refresh_token);
  }

  return data.access_token as string;
};

const getNowPlaying = async (access_token: string): Promise<SpotifyResponse | null> => {
  const res = await fetch(NOW_PLAYING_ENDPOINT, {
    headers: {
      Authorization: `Bearer ${access_token}`,
      "Content-Type": "application/json",
    },
  });

  // 204 = nothing playing right now, and the body is empty.
  if (res.status === 204 || !res.ok) {
    return null;
  }

  const data = await res.json();
  if (!data || !data.item) {
    return null;
  }

  const { currently_playing_type: type } = data;

  if (type === "episode") {
    return {
      id: data.item.id,
      isPlaying: data.is_playing,
      timestamp: data.timestamp,
      image: data.item.images[0].url,
      song: {
        name: data.item.name,
        href: data.item.external_urls.spotify,
        progress: data.progress_ms,
        duration: data.item.duration_ms,
      },
      album: null,
      artist: {
        name: data.item.show.name,
        href: data.item.show.external_urls.spotify,
      },
    };
  } else {
    return {
      id: data.item.id,
      isPlaying: data.is_playing,
      timestamp: data.timestamp,
      image: data.item.album.images[0].url,
      song: {
        name: data.item.name,
        href: data.item.external_urls.spotify,
        progress: data.progress_ms,
        duration: data.item.duration_ms,
      },
      album: {
        name: data.item.album.name,
        href: data.item.album.external_urls.spotify,
      },
      artist: {
        name: data.item.artists[0].name,
        href: data.item.artists[0].external_urls.spotify,
      },
    };
  }
};

const getRecentlyPlayed = async (access_token: string): Promise<SpotifyResponse> => {
  const res = await fetch(RECENTLY_PLAYED_ENDPOINT, {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  });

  if (!res.ok) {
    return EMPTY;
  }

  const data = await res.json();
  if (!data.items?.length) {
    return EMPTY;
  }

  const [latest] = data.items.sort(
    (a: { played_at: string | number | Date }, b: { played_at: string | number | Date }) =>
      new Date(b.played_at).getTime() - new Date(a.played_at).getTime(),
  );

  return {
    id: latest.track.id,
    isPlaying: false,
    timestamp: new Date(latest.played_at).getTime(),
    image: latest.track.album.images[0].url,
    song: {
      name: latest.track.name,
      href: latest.track.external_urls.spotify,
      progress: 0,
      duration: 0,
    },
    album: {
      name: latest.track.album.name,
      href: latest.track.album.external_urls.spotify,
    },
    artist: {
      name: latest.track.artists[0].name,
      href: latest.track.artists[0].external_urls.spotify,
    },
  };
};

export async function GET() {
  let access_token: string;

  try {
    access_token = await getAccessToken();
  } catch (e) {
    if (e instanceof SpotifyReauthError) {
      // Do not retry with this token — it is dead. Recovery is a manual reauth
      // through /api/spotify/login, which is mine to run; visitors just see the
      // card go quiet.
      console.error("[spotify]", e.message, "— run /api/spotify/login to reauthorize");
      return NextResponse.json(EMPTY);
    }
    console.error("[spotify] token refresh failed", e);
    return NextResponse.json(EMPTY);
  }

  try {
    const nowPlaying = await getNowPlaying(access_token);
    if (nowPlaying) {
      return NextResponse.json(nowPlaying);
    }
    return NextResponse.json(await getRecentlyPlayed(access_token));
  } catch (e) {
    console.error("[spotify] playback lookup failed", e);
    return NextResponse.json(EMPTY);
  }
}
