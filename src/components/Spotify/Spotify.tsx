import Link from 'next/link'
import { Flex } from 'rebass/styled-components'
import { useFiltersContext, useSpotifyContext } from 'providers'
import * as S from './styles'
import { getOpacity } from 'utils'

interface SpotifyStatusProps {
  isPlaying: boolean
}

const SpotifyStatus = ({ isPlaying }: SpotifyStatusProps) => {
  if (!isPlaying) {
    return (
      <S.SpotifyStatus isPlaying={isPlaying}>
        Offline. Last played
      </S.SpotifyStatus>
    )
  }

  return <S.SpotifyStatus isPlaying={isPlaying}>Now playing</S.SpotifyStatus>
}

const Spotify = () => {
  const { active } = useFiltersContext()

  const { isPlaying, image, song, artist } = useSpotifyContext()

  return (
    <S.SpotifyWrapper $opacity={getOpacity(['About'], active)}>
      <S.AlbumArt src={image} />
      <S.SpotifyImage src="/spotify.svg" alt="" width={54} height={54} />
      <S.SpotifyMetadata>
        <S.SpotifyNowPlaying>
          <S.SpotifyStatusContainer>
            <S.SpotifyStatusSlice
              h={4.85}
              isPlaying={isPlaying}
              timing={0.85}
            />
            <S.SpotifyStatusSlice
              h={11.26}
              isPlaying={isPlaying}
              timing={1.26}
            />
            <S.SpotifyStatusSlice
              h={6.62}
              isPlaying={isPlaying}
              timing={0.62}
            />
          </S.SpotifyStatusContainer>
          <SpotifyStatus isPlaying={isPlaying} />
        </S.SpotifyNowPlaying>

        <Flex flexDirection="column">
          <Link target="_blank" href={song?.href || ''}>
            <S.SpotifySongTitle>{song?.name}</S.SpotifySongTitle>
          </Link>
          <Link target="_blank" href={artist?.href || ''}>
            <S.SpotifyArtist>{artist?.name}</S.SpotifyArtist>
          </Link>
        </Flex>
      </S.SpotifyMetadata>
    </S.SpotifyWrapper>
  )
}

export default Spotify
