import { queryOptions, useSuspenseQuery } from '@tanstack/react-query'

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

async function getSpotify(): Promise<SpotifyResponse> {
  const baseUrl =
    typeof window === 'undefined'
      ? process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'
      : ''

  const res = await fetch(`${baseUrl}/api/spotify`)
  if (!res.ok) {
    throw new Error('Failed to fetch Spotify data')
  }
  return res.json()
}

function selectNowPlaying(data: SpotifyResponse) {
  return {
    isPlaying: data.isPlaying,
    image: data.image,
    song: data.song,
    artist: data.artist
  }
}

export function spotifyOptions() {
  return queryOptions({
    queryKey: ['spotify'],
    queryFn: getSpotify,
    select: selectNowPlaying,
    refetchInterval: 30_000, // Poll every 30 seconds
    staleTime: 30_000
  })
}

export function useNowPlaying() {
  const { data } = useSuspenseQuery(spotifyOptions())
  return data
}