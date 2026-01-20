"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import { Responsive, WidthProvider } from "react-grid-layout";
import { isMobile } from "react-device-detect";

import type { ProjectImage } from "@/lib/projects";

const ResponsiveGridLayout = WidthProvider(Responsive);

const lg = [
  { i: "featured", x: 0, y: 0, w: 2, h: 1 },
  { i: "inverted", x: 2, y: 0, w: 1, h: 1 },
  { i: "logo", x: 3, y: 0, w: 1, h: 1 },
  { i: "first", x: 0, y: 1, w: 1, h: 1 },
  { i: "second", x: 1, y: 1, w: 2, h: 1 },
  { i: "third", x: 3, y: 1, w: 1, h: 1 },
  { i: "fourth", x: 0, y: 2, w: 1, h: 1 },
  { i: "fifth", x: 1, y: 2, w: 1, h: 1 },
  { i: "sixth", x: 3, y: 2, w: 2, h: 1 },
];

const md = [
  { i: "featured", x: 0, y: 0, w: 2, h: 1 },
  { i: "inverted", x: 2, y: 0, w: 1, h: 1 },
  { i: "logo", x: 3, y: 0, w: 1, h: 1 },
  { i: "first", x: 0, y: 1, w: 1, h: 1 },
  { i: "second", x: 1, y: 1, w: 2, h: 1 },
  { i: "third", x: 3, y: 1, w: 1, h: 1 },
  { i: "fourth", x: 0, y: 2, w: 1, h: 1 },
  { i: "fifth", x: 1, y: 2, w: 1, h: 1 },
  { i: "sixth", x: 3, y: 2, w: 2, h: 1 },
];

const sm = [
  { i: "featured", x: 0, y: 0, w: 2, h: 1 },
  { i: "inverted", x: 0, y: 0, w: 1, h: 1 },
  { i: "logo", x: 1, y: 0, w: 1, h: 1 },
  { i: "second", x: 0, y: 2, w: 2, h: 1 },
  { i: "first", x: 0, y: 3, w: 1, h: 1 },
  { i: "third", x: 1, y: 3, w: 1, h: 1 },
  { i: "fourth", x: 0, y: 5, w: 1, h: 1 },
  { i: "fifth", x: 1, y: 5, w: 1, h: 1 },
  { i: "sixth", x: 0, y: 4, w: 2, h: 1 },
];

const rowHeights: Record<string, number> = {
  lg: 280,
  md: 180,
  sm: 164,
};

interface Props {
  images: Record<string, ProjectImage>;
}

export function ImageGallery({ images }: Props) {
  const [rowHeight, setRowHeight] = useState(280);

  const children = useMemo(() => {
    return Object.keys(images).map((key) => {
      const { style, src } = images[key];
      const { objectFit, ...containerStyle } = style || {};

      return (
        <div key={key}>
          <div
            style={containerStyle}
            className="h-full w-full flex flex-col items-center justify-center rounded-[32px] overflow-hidden bg-card shadow-[inset_0_0_0_2px_var(--border)] cursor-grab active:cursor-grabbing"
          >
            <Image
              src={src}
              width={800}
              height={800}
              alt={key}
              className="w-full h-full"
              style={{
                objectFit: (objectFit as "cover" | "contain") || "cover",
              }}
            />
          </div>
        </div>
      );
    });
  }, [images]);

  return (
    <div className="max-w-[320px] md:max-w-[800px] xl:max-w-[1200px] relative mt-8 mx-auto pb-20">
      <ResponsiveGridLayout
        useCSSTransforms
        isDraggable={!isMobile}
        isResizable={false}
        layouts={{ lg, md, sm }}
        breakpoints={{ lg: 1199, md: 799, sm: 0 }}
        cols={{ lg: 4, md: 4, sm: 2 }}
        onBreakpointChange={(breakpoint) => setRowHeight(rowHeights[breakpoint])}
        containerPadding={[0, 0]}
        rowHeight={rowHeight}
        margin={[16, 16]}
      >
        {children}
      </ResponsiveGridLayout>
    </div>
  );
}
