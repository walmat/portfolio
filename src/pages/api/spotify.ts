import { NextApiRequest, NextApiResponse } from 'next'
import querystring from 'querystring'

const client_id = process.env.SPOTIFY_CLIENT_ID
const client_secret = process.env.SPOTIFY_CLIENT_SECRET
const refresh_token = process.env.SPOTIFY_REFRESH_TOKEN

const basic = Buffer.from(`${client_id}:${client_secret}`).toString('base64')
const TOKEN_ENDPOINT = `https://accounts.spotify.com/api/token`

const NOW_PLAYING_ENDPOINT = `https://api.spotify.com/v1/me/player/currently-playing?additional_types=track,episode`
const RECENTLY_PLAYED_ENDPOINT = `https://api.spotify.com/v1/me/player/recently-played`

let _accessToken = ''

export interface SpotifySong {
  name: string
  href: string
  progress: number
  duration: number
}

export interface SpotifyAlbum {
  name: string
  href: string
}

export interface SpotifyArtist {
  name: string
  href: string
}

export interface SpotifyResponse {
  id: string
  isPlaying: boolean
  timestamp: number
  image: string
  song: SpotifySong | null
  album: SpotifyAlbum | null
  artist: SpotifyArtist | null
}

const getAccessToken = async () => {
  const response = await fetch(TOKEN_ENDPOINT, {
    method: 'POST',
    headers: {
      Authorization: `Basic ${basic}`,
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: querystring.stringify({
      grant_type: 'refresh_token',
      refresh_token
    })
  })

  return response.json()
}

export const getNowPlaying = async (
  access_token: string
): Promise<SpotifyResponse> => {
  const res = await fetch(NOW_PLAYING_ENDPOINT, {
    headers: {
      Authorization: `Bearer ${access_token}`,
      'Content-Type': 'application/json'
    }
  })

  const data = await res.json()
  if (!data) {
    throw new Error('no data')
  }

  const { currently_playing_type: type } = data

  if (type === 'episode') {
    return {
      id: data.item.id,
      isPlaying: data.is_playing,
      timestamp: data.timestamp,
      image: data.item.images[0].url,
      song: {
        name: data.item.name,
        href: data.item.external_urls.spotify,
        progress: data.progress_ms,
        duration: data.item.duration_ms
      },
      album: null,
      artist: {
        name: data.item.show.name,
        href: data.item.show.external_urls.spotify
      }
    }
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
        duration: data.item.duration_ms
      },
      album: {
        name: data.item.album.name,
        href: data.item.album.external_urls.spotify
      },
      artist: {
        name: data.item.artists[0].name,
        href: data.item.artists[0].external_urls.spotify
      }
    }
  }
}

export const getRecentlyPlayed = async (
  access_token: string
): Promise<SpotifyResponse> => {
  const res = await fetch(RECENTLY_PLAYED_ENDPOINT, {
    headers: {
      Authorization: `Bearer ${access_token}`
    }
  })

  const data = await res.json()
  if (!data.items.length) {
    return {
      id: '',
      isPlaying: false,
      timestamp: -1,
      image: '',
      song: null,
      album: null,
      artist: null
    }
  }

  const [latest] = data.items.sort(
    (
      a: { played_at: string | number | Date },
      b: { played_at: string | number | Date }
    ) => new Date(b.played_at).getTime() - new Date(a.played_at).getTime()
  )

  return {
    id: latest.track.id,
    isPlaying: false,
    timestamp: new Date(latest.played_at).getTime(),
    image: latest.track.album.images[0].url,
    song: {
      name: latest.track.name,
      href: latest.track.external_urls.spotify,
      progress: 0,
      duration: 0
    },
    album: {
      name: latest.track.album.name,
      href: latest.track.album.external_urls.spotify
    },
    artist: {
      name: latest.track.artists[0].name,
      href: latest.track.artists[0].external_urls.spotify
    }
  }
}

export default async (_: NextApiRequest, res: NextApiResponse) => {
  try {
    let accessToken = _accessToken

    if (!accessToken) {
      const { access_token } = await getAccessToken()
      if (!access_token) {
        throw new Error('No access token')
      }
      accessToken = _accessToken = access_token
    }

    let data: SpotifyResponse | null = null
    try {
      data = await getNowPlaying(accessToken)
    } catch (e) {
      console.error(e)
    }

    if (!data) {
      try {
        data = await getRecentlyPlayed(accessToken)
      } catch (e) {
        console.error(e)
      }
    }

    res.status(200).json(data)
  } catch (err) {
    res.status(403).json({ err: 'Error!' })
  }
}
