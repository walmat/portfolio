"use client";

import { Link } from "next-view-transitions";
import Image from "next/image";
import { motion } from "framer-motion";

import { Arrow, Button } from "@/components";
import { ThemeOptions, useThemeContext } from "@/providers";
import { useCardOpacity, useProjectHover } from "@/hooks";
import { cn } from "@/lib/utils";
import { cardBase, cardInteractive } from "@/lib/styles";
import type { ProjectFrontmatter } from "@/lib/projects";

interface Props {
  project: ProjectFrontmatter;
}

export function ProjectCard({ project }: Props) {
  const { theme } = useThemeContext();
  const opacity = useCardOpacity(["Projects"]);

  const { slug, card } = project;
  const { animate, onHoverStart, onHoverEnd } = useProjectHover(slug);

  const backgroundStyle =
    theme === "dark" ? "var(--card)" : card.gradient || card.backgroundColor || "var(--card)";

  return (
    <motion.div
      animate={animate}
      onHoverEnd={onHoverEnd}
      onHoverStart={onHoverStart}
      style={{
        opacity,
        viewTransitionName: `project-${slug}`,
        background: backgroundStyle,
      }}
      className={cn(cardBase, cardInteractive)}
    >
      <Image
        src={card.logoSrc}
        alt=""
        fill
        sizes="(max-width: 768px) 100vw, 50vw"
        className="absolute left-0 top-0 object-cover z-[2]"
      />
      {theme === ThemeOptions[0] && (
        <>
          {card.rectangleSvg && (
            <Image
              src={card.rectangleSvg}
              alt=""
              height={600}
              width={600}
              className={card.rectangleStyle}
            />
          )}
          {card.accentSvg && (
            <Image
              src={card.accentSvg}
              alt=""
              height={600}
              width={600}
              className={card.accentStyle}
            />
          )}
        </>
      )}
      <Link href={`/projects/${slug}`}>
        <Button withMotion Icon={Arrow}>
          {card.buttonLabel}
        </Button>
      </Link>
    </motion.div>
  );
}
