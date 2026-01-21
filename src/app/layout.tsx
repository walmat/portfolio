import { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import { Analytics } from "@vercel/analytics/react";

import { Providers } from "@/lib/providers";
import "./globals.css";

const moranga = localFont({
  src: "../fonts/Moranga-Bold.otf",
  variable: "--font-moranga-local",
});

const silka = localFont({
  src: [
    {
      path: "../fonts/Silka-Regular.ttf",
      weight: "400",
    },
    {
      path: "../fonts/Silka-Medium.ttf",
      weight: "500",
    },
  ],
  variable: "--font-silka-local",
});

export const metadata: Metadata = {
  title: "Matthew Wall « mtw.",
  description:
    "An aspiring homesteader and avid believer that each individual can change the world.",
  icons: {
    icon: "/favicon.ico",
    apple: "/icon-512.png",
  },
  manifest: "/manifest.json",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${moranga.variable} ${silka.variable}`} suppressHydrationWarning>
      <body className="flex flex-col flex-1">
        <Providers>
          {children}
          <Analytics />
        </Providers>
      </body>
    </html>
  );
}
