"use client";

import Image from "next/image";

interface Screenshot {
  src: string;
  alt: string;
  caption?: string;
}

interface Props {
  screenshots: Screenshot[];
}

// Desktop counterpart to MobileScreenshots: web screens are wide, so they stack
// one per row at full width instead of sitting side by side.
export function DesktopScreenshots({ screenshots }: Props) {
  return (
    <div className="flex flex-col gap-6 py-6">
      {screenshots.map(({ src, alt, caption }) => (
        <figure key={src} className="m-0">
          <div className="rounded-xl overflow-hidden bg-card shadow-[inset_0_0_0_1px_var(--border)]">
            <Image src={src} alt={alt} width={1600} height={1000} className="w-full h-auto" />
          </div>
          {caption && (
            <figcaption className="mt-2 text-[13px] leading-[22px] tracking-[0.25px] text-muted-foreground">
              {caption}
            </figcaption>
          )}
        </figure>
      ))}
    </div>
  );
}
