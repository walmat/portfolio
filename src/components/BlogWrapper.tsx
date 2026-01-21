"use client";

import { ReactNode, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useAnimation, motion, AnimatePresence } from "framer-motion";
import { format } from "date-fns";
import Image from "next/image";

import { Arrow, Close } from "@/components";
import { ImageGallery } from "@/components/mdx/ImageGallery";
import { RainbowLettermark } from "@/components/mdx/RainbowLettermark";
import type { BlogFrontmatter, BlogNavigation } from "@/lib/blogs";

const heroComponents: Record<string, React.ComponentType> = {
  RainbowLettermark,
};

const button = {
  initial: {
    scale: 1,
  },
  animate: {
    scale: 1.1,
  },
};

const spring = {
  type: "spring" as const,
  stiffness: 300,
  damping: 30,
};

type NavigationDirection = "prev" | "next" | "none";

function getStoredDirection(): NavigationDirection {
  if (typeof window === "undefined") return "none";
  const stored = sessionStorage.getItem("blog-nav-direction");
  sessionStorage.removeItem("blog-nav-direction");
  return (stored as NavigationDirection) || "none";
}

function setStoredDirection(direction: NavigationDirection) {
  sessionStorage.setItem("blog-nav-direction", direction);
}

interface Props {
  frontmatter: BlogFrontmatter;
  navigation: BlogNavigation;
  children: ReactNode;
}

export function BlogWrapper({ frontmatter, navigation, children }: Props) {
  const buttonAnimation = useAnimation();
  const router = useRouter();
  const back = () => router.push("/");

  const { title, description, date, author, tags, hero, images, slug } = frontmatter;

  const [isExiting, setIsExiting] = useState(false);
  const [exitDirection, setExitDirection] = useState<NavigationDirection>("none");
  const [enterDirection, setEnterDirection] = useState<NavigationDirection>("none");
  const [isVisible, setIsVisible] = useState(false);

  // Read stored direction on mount
  useEffect(() => {
    const direction = getStoredDirection();
    setEnterDirection(direction);
    // Small delay to ensure animation plays
    requestAnimationFrame(() => {
      setIsVisible(true);
    });
  }, []);

  const navigateTo = (href: string, direction: NavigationDirection) => {
    setExitDirection(direction);
    setIsExiting(true);
    setStoredDirection(direction);

    // Wait for exit animation to complete
    setTimeout(() => {
      router.push(href);
    }, 300);
  };

  // Calculate initial and animate values based on direction
  const getInitialX = () => {
    if (enterDirection === "prev") return 60; // Coming from right (going to older post)
    if (enterDirection === "next") return -60; // Coming from left (going to newer post)
    return 0;
  };

  const getExitX = () => {
    if (exitDirection === "prev") return -60; // Exit to left (going to older post)
    if (exitDirection === "next") return 60; // Exit to right (going to newer post)
    return 0;
  };

  return (
    <>
      <motion.button
        onTap={back}
        animate={buttonAnimation}
        variants={button}
        onHoverStart={() => buttonAnimation.start("animate")}
        onHoverEnd={() => buttonAnimation.start("initial")}
        className="absolute w-[46px] h-[46px] top-[37px] left-8 md:left-[calc(50%-23px)] rounded-[23px] flex items-center justify-center transition-all duration-300 ease-out bg-secondary border-2 border-border hover:cursor-pointer hover:bg-muted z-10"
      >
        <Close />
      </motion.button>

      <AnimatePresence mode="wait">
        {!isExiting && (
          <motion.div
            key={slug}
            initial={{
              opacity: 0,
              transform: `translateX(${getInitialX()}px)`,
            }}
            animate={{
              opacity: isVisible ? 1 : 0,
              transform: "translateX(0px)",
              transition: spring,
            }}
            exit={{
              opacity: 0,
              transform: `translateX(${getExitX()}px)`,
              transition: { duration: 0.25, ease: [0.23, 1, 0.32, 1] },
            }}
            style={{ viewTransitionName: `blog-${slug}` }}
            className="absolute top-[120px] w-full will-change-transform"
          >
            <article className="mx-auto max-w-[320px] md:max-w-[800px] py-[50px] md:py-[60px]">
              <div className="px-0 md:px-8 lg:px-4">
                {/* Hero */}
                {hero &&
                  (() => {
                    const HeroComponent = heroComponents[hero.src];
                    if (HeroComponent) {
                      return (
                        <div className="mb-8">
                          <HeroComponent />
                        </div>
                      );
                    }
                    return (
                      <div className="mb-8 rounded-2xl overflow-hidden">
                        <Image
                          src={hero.src}
                          alt={title}
                          width={0}
                          height={0}
                          sizes="100vw"
                          className={`w-full h-auto ${hero.className || ""}`}
                          style={hero.style}
                        />
                      </div>
                    );
                  })()}

                {/* Header */}
                <header className="mb-8">
                  <h1 className="text-4xl leading-[48px] font-normal text-foreground mb-4">
                    {title}
                  </h1>
                  <p className="text-[18px] leading-7 tracking-[0.25px] font-normal text-muted-foreground mb-4">
                    {description}
                  </p>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    {author && <span>{author}</span>}
                    <span>{format(new Date(date), "MMMM dd, yyyy")}</span>
                  </div>
                  {tags && tags.length > 0 && (
                    <div className="flex gap-2 mt-4">
                      {tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 text-xs rounded-full bg-secondary text-muted-foreground"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </header>

                {/* Content */}
                <div className="prose prose-neutral dark:prose-invert max-w-none">{children}</div>

                {/* Image Gallery */}
                {images && Object.keys(images).length > 0 && (
                  <div className="mt-12">
                    <ImageGallery images={images} />
                  </div>
                )}

                {/* Navigation */}
                <nav className="mt-16 pt-8 border-t border-border">
                  <div className="flex justify-between items-center">
                    {navigation.prev ? (
                      <button
                        onClick={() => navigateTo(`/blog/${navigation.prev!.slug}`, "prev")}
                        className="group flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors duration-200 cursor-pointer"
                      >
                        <div className="rotate-180">
                          <Arrow />
                        </div>
                        <div className="flex flex-col items-start">
                          <span className="text-xs uppercase tracking-wider">Previous</span>
                          <span className="text-sm font-medium text-foreground group-hover:underline">
                            {navigation.prev.title}
                          </span>
                        </div>
                      </button>
                    ) : (
                      <div />
                    )}

                    {navigation.next ? (
                      <button
                        onClick={() => navigateTo(`/blog/${navigation.next!.slug}`, "next")}
                        className="group flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors duration-200 text-right cursor-pointer"
                      >
                        <div className="flex flex-col items-end">
                          <span className="text-xs uppercase tracking-wider">Next</span>
                          <span className="text-sm font-medium text-foreground group-hover:underline">
                            {navigation.next.title}
                          </span>
                        </div>
                        <Arrow />
                      </button>
                    ) : (
                      <div />
                    )}
                  </div>
                </nav>
              </div>
            </article>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
