"use client";

import { ReactNode } from "react";
import { Link, useTransitionRouter } from "next-view-transitions";
import { useAnimation, motion } from "framer-motion";

import { Arrow, Close } from "@/components";
import { ImageGallery } from "@/components/mdx/ImageGallery";
import type { ProjectFrontmatter } from "@/lib/projects";

const button = {
  initial: {
    scale: 1,
  },
  animate: {
    scale: 1.1,
  },
};

const container = {
  initial: {
    y: 0,
  },
  animate: {
    y: 20,
    transition: {
      duration: 0.24,
    },
  },
};

interface Props {
  frontmatter: ProjectFrontmatter;
  children: ReactNode;
}

export function ProjectWrapper({ frontmatter, children }: Props) {
  const animation = useAnimation();
  const router = useTransitionRouter();
  const back = () => router.push("/");

  const { name, description, links, images, slug } = frontmatter;

  return (
    <>
      <motion.button
        onTap={back}
        animate={animation}
        variants={button}
        onHoverStart={() => animation.start("animate")}
        onHoverEnd={() => animation.start("initial")}
        className="absolute w-[46px] h-[46px] top-[37px] left-8 md:left-[calc(50%-23px)] rounded-[23px] flex items-center justify-center transition-all duration-300 ease-out bg-secondary border-2 border-border hover:cursor-pointer hover:bg-muted"
      >
        <Close />
      </motion.button>

      <motion.div
        animate={animation}
        variants={container}
        style={{ viewTransitionName: `project-${slug}` }}
        className="absolute top-[120px] w-full will-change-transform transition-all duration-300 ease-out"
      >
        <div className="mx-auto max-w-[320px] md:max-w-[800px] xl:max-w-[1200px] py-[50px] md:py-[60px]">
          <div className="px-0 md:px-8 lg:px-4">
            <h2 className="text-4xl leading-[48px] font-normal text-foreground mb-2">{name}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <p className="text-[26px] leading-10 tracking-[0.25px] font-normal text-foreground mb-4">
                  {description}
                </p>
                <div className="flex mb-8">
                  {links.map(({ href, label }) => (
                    <Link
                      target="_blank"
                      key={href}
                      href={href}
                      className="h-[38px] flex items-center px-4 rounded-[19px] tracking-[0.25px] text-sm mr-2 transition-all duration-200 ease-out bg-secondary text-foreground border-2 border-border hover:cursor-pointer hover:bg-muted"
                    >
                      {label}
                      <div className="ml-1.5 flex items-center justify-center">
                        <Arrow />
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
              <div>{children}</div>
            </div>
          </div>
          {images && Object.keys(images).length > 0 && <ImageGallery images={images} />}
        </div>
      </motion.div>
    </>
  );
}
