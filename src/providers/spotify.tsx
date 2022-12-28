import { useSpotify } from 'hooks'
import { createContext, PropsWithChildren, useContext } from 'react'

interface SpotifySong {
  name: string
  href: string
  progress: number
  duration: number
}

interface SpotifyAlbum {
  name: string
  href: string
}

interface SpotifyArtist {
  name: string
  href: string
}

interface SpotifyContext {
  isPlaying: boolean
  timestamp: number
  image: string
  song: SpotifySong | null
  album: SpotifyAlbum | null
  artist: SpotifyArtist | null
}

const SpotifyContext = createContext<SpotifyContext>({
  isPlaying: false,
  timestamp: -1,
  image: '',
  song: null,
  album: null,
  artist: null
})

interface SpotifyProviderProps {
  children: PropsWithChildren<React.ReactNode>
}

export const SpotifyProvider = ({ children }: SpotifyProviderProps) => {
  const value = useSpotify()

  return (
    <SpotifyContext.Provider value={value}>{children}</SpotifyContext.Provider>
  )
}

export const useSpotifyContext = () => useContext(SpotifyContext)
