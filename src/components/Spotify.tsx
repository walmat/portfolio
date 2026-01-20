"use client";

import { Suspense } from "react";
import Link from "next/link";
import Image from "next/image";
import { useCardOpacity } from "@/hooks";
import { useNowPlaying } from "@/lib/spotify";

interface SpotifyStatusProps {
  isPlaying: boolean;
}

const SpotifyStatus = ({ isPlaying }: SpotifyStatusProps) => {
  if (!isPlaying) {
    return (
      <p className="ml-1 text-sm leading-6 tracking-[0.25px] font-normal text-muted-foreground">
        Offline. Last played
      </p>
    );
  }

  return (
    <p className="ml-1 text-sm leading-6 tracking-[0.25px] font-normal text-spotify-green">
      Now playing
    </p>
  );
};

interface SpotifyStatusSliceProps {
  h: number;
  isPlaying: boolean;
  timing: number;
}

const SpotifyStatusSlice = ({ h, isPlaying, timing }: SpotifyStatusSliceProps) => (
  <div
    style={{
      height: `${h}px`,
      animation: isPlaying ? `playing ${timing}s infinite ease` : "none",
    }}
    className={`w-[3px] mr-[3px] rounded-[1.5px] ${
      isPlaying ? "bg-spotify-green" : "bg-muted-foreground"
    }`}
  />
);

const SpotifyFallback = () => {
  return (
    <div className="relative h-full w-full flex flex-col items-start justify-between p-8 px-[38px] md:p-7 md:px-8 lg:p-8 lg:px-[38px] rounded-[32px] overflow-hidden bg-card shadow-[inset_0_0_0_2px_var(--border)] cursor-grab active:cursor-grabbing">
      <Image
        src="/spotify.svg"
        alt=""
        width={54}
        height={54}
        className="-ml-1 z-[2] w-[72px] h-[72px] md:w-9 md:h-9 lg:w-[54px] lg:h-[54px]"
      />
      <div className="z-[2]">
        <div className="flex items-center mb-0">
          <div className="h-5 relative flex items-center">
            <div className="w-[3px] h-[4.85px] mr-[3px] rounded-[1.5px] bg-muted-foreground" />
            <div className="w-[3px] h-[11.26px] mr-[3px] rounded-[1.5px] bg-muted-foreground" />
            <div className="w-[3px] h-[6.62px] mr-[3px] rounded-[1.5px] bg-muted-foreground" />
          </div>
          <p className="ml-1 text-sm leading-6 tracking-[0.25px] font-normal text-muted-foreground">
            Loading...
          </p>
        </div>

        <div className="flex flex-col gap-2 mt-2">
          <div className="h-8 w-48 bg-muted-foreground/20 rounded animate-pulse" />
          <div className="h-5 w-32 bg-muted-foreground/20 rounded animate-pulse" />
        </div>
      </div>
    </div>
  );
};

const SpotifyContent = () => {
  const { isPlaying, image, song, artist } = useNowPlaying();
  const opacity = useCardOpacity(["About"]);

  return (
    <div
      style={{ opacity }}
      className="relative h-full w-full flex flex-col items-start justify-between p-8 px-[38px] md:p-7 md:px-8 lg:p-8 lg:px-[38px] rounded-[32px] overflow-hidden bg-card shadow-[inset_0_0_0_2px_var(--border)] cursor-grab active:cursor-grabbing"
    >
      {image && (
        <Image
          alt=""
          src={image}
          fill
          className="absolute top-0 left-0 object-cover opacity-25 z-[1]"
        />
      )}
      <Image
        src="/spotify.svg"
        alt=""
        width={54}
        height={54}
        className="-ml-1 z-[2] w-[72px] h-[72px] md:w-9 md:h-9 lg:w-[54px] lg:h-[54px]"
      />
      <div className="z-[2]">
        <div className="flex items-center mb-0">
          <div className="h-5 relative flex items-center">
            <SpotifyStatusSlice h={4.85} isPlaying={isPlaying} timing={0.85} />
            <SpotifyStatusSlice h={11.26} isPlaying={isPlaying} timing={1.26} />
            <SpotifyStatusSlice h={6.62} isPlaying={isPlaying} timing={0.62} />
          </div>
          <SpotifyStatus isPlaying={isPlaying} />
        </div>

        <div className="flex flex-col">
          <Link target="_blank" href={song?.href || ""}>
            <h2 className="transition-opacity duration-500 ease-in-out inline-block text-[32px] md:text-xl lg:text-2xl leading-[38px] md:leading-8 lg:leading-8 font-normal text-foreground hover:opacity-50 hover:cursor-pointer">
              {song?.name}
            </h2>
          </Link>
          <Link target="_blank" href={artist?.href || ""}>
            <p className="transition-opacity duration-500 ease-in-out inline-block text-[15px] tracking-[0.5px] font-normal text-foreground leading-[22px] hover:opacity-50 hover:cursor-pointer">
              {artist?.name}
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};

const Spotify = () => {
  return (
    <Suspense fallback={<SpotifyFallback />}>
      <SpotifyContent />
    </Suspense>
  );
};

export default Spotify;
