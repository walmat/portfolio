import {
  SpotifyResponse,
  SpotifyAlbum,
  SpotifyArtist,
  SpotifySong
} from 'pages/api/spotify'
import { useEffect, useState } from 'react'

export const useSpotify = () => {
  const [isPlaying, setIsPlaying] = useState(false)
  const [timestamp, setTimestamp] = useState(0)
  const [image, setImage] = useState('')
  const [song, setSong] = useState<SpotifySong | null>(null)
  const [album, setAlbum] = useState<SpotifyAlbum | null>(null)
  const [artist, setArtist] = useState<SpotifyArtist | null>(null)

  const getSpotify = async () => {
    try {
      const res = await fetch('/api/spotify')

      const {
        isPlaying,
        timestamp,
        image,
        song,
        album,
        artist
      }: SpotifyResponse = await res.json()

      setIsPlaying(isPlaying)
      setTimestamp(timestamp)
      setImage(image)
      setSong(song)
      setAlbum(album)
      setArtist(artist)
    } catch (_) {
      // noop
    }
  }

  useEffect(() => {
    getSpotify()
    const interval = setInterval(getSpotify, 30_000)
    return () => clearInterval(interval)
  }, [])

  return {
    isPlaying,
    timestamp,
    image,
    song,
    album,
    artist
  }
}
