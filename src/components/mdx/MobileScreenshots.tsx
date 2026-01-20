"use client";

import Image from "next/image";

interface Screenshot {
  src: string;
  alt: string;
}

interface Props {
  screenshots: Screenshot[];
}

export function MobileScreenshots({ screenshots }: Props) {
  return (
    <div className="flex gap-4 py-6">
      {screenshots.map(({ src, alt }) => (
        <div
          key={src}
          className="flex-1 rounded-xl overflow-hidden bg-card shadow-[inset_0_0_0_1px_var(--border)]"
        >
          <Image src={src} alt={alt} width={400} height={800} className="w-full h-auto" />
        </div>
      ))}
    </div>
  );
}
