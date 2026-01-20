"use client";

import { useEffect, useMemo, useState } from "react";
import { Responsive } from "react-grid-layout";
import { isMobile } from "react-device-detect";
import { motion } from "framer-motion";

import { Spotify, Biography, Social, Theme, Contact, Blog } from "@/components";
import { ProjectCard } from "@/components/ProjectCard";

import { lg, md, mobile, rowHeights } from "@/meta";
import { useFiltersContext } from "@/providers";
import type { ProjectFrontmatter } from "@/lib/projects";

const containerWidths = {
  lg: 1200,
  md: 800,
  sm: 375,
};

interface Item {
  key: string;
  Component: React.ReactNode;
}

interface Props {
  projects: ProjectFrontmatter[];
}

const Grid = ({ projects }: Props) => {
  const projectMap = useMemo(() => {
    return projects.reduce(
      (acc, project) => {
        acc[project.slug] = project;
        return acc;
      },
      {} as Record<string, ProjectFrontmatter>,
    );
  }, [projects]);

  const items: Item[] = useMemo(() => {
    return [
      {
        key: "biography",
        Component: <Biography />,
      },
      {
        key: "github",
        Component: (
          <Social
            {...{
              width: 64,
              height: 64,
              name: "github",
              href: "https://github.com/walmat",
            }}
          />
        ),
      },
      {
        key: "nebula",
        Component: projectMap["nebula"] ? <ProjectCard project={projectMap["nebula"]} /> : null,
      },
      {
        key: "spotify",
        Component: <Spotify />,
      },
      {
        key: "twitter",
        Component: (
          <Social
            {...{
              width: 75.121,
              height: 61.052,
              href: "https://x.com/mtw_dev",
              name: "x",
              extension: "png",
            }}
          />
        ),
      },
      {
        key: "tigerbob",
        Component: projectMap["tigerbob"] ? <ProjectCard project={projectMap["tigerbob"]} /> : null,
      },
      {
        key: "blog",
        Component: <Blog />,
      },
      {
        key: "theme",
        Component: <Theme />,
      },
      {
        key: "recur",
        Component: projectMap["recur"] ? <ProjectCard project={projectMap["recur"]} /> : null,
      },
      {
        key: "contact",
        Component: <Contact />,
      },
    ];
  }, [projectMap]);

  const [rowHeight, setRowHeight] = useState<number | undefined>(undefined);
  const [width, setWidth] = useState<number | undefined>(undefined);
  const [mounted, setMounted] = useState(false);

  const { active } = useFiltersContext();

  const children = useMemo(() => {
    return items.map(({ key, Component }) => {
      return <div key={key}>{Component}</div>;
    });
  }, [items]);

  useEffect(() => {
    const updateDimensions = () => {
      const windowWidth = window.innerWidth;

      if (windowWidth < 800) {
        setRowHeight(rowHeights["sm"]);
        setWidth(Math.min(windowWidth - 32, containerWidths.sm));
      } else if (windowWidth < 1200) {
        setRowHeight(rowHeights["md"]);
        setWidth(Math.min(windowWidth - 32, containerWidths.md));
      } else {
        setRowHeight(rowHeights["lg"]);
        setWidth(containerWidths.lg);
      }
    };

    updateDimensions();
    setMounted(true);

    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  // Disable transitions during window resize for better performance
  useEffect(() => {
    let resizeTimer: NodeJS.Timeout;

    const handleResize = () => {
      document.body.classList.add("is-resizing");
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
        document.body.classList.remove("is-resizing");
      }, 150);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
      clearTimeout(resizeTimer);
    };
  }, []);

  return (
    <motion.div
      className="will-change-[opacity] relative"
      initial={{ opacity: 0 }}
      animate={{ opacity: mounted ? 1 : 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="grid-container">
        {rowHeight && width && (
          <Responsive
            width={width}
            useCSSTransforms={mounted}
            isDraggable={!isMobile}
            isResizable={false}
            draggableCancel=".no-drag, button, a, input, textarea"
            layouts={{ lg: lg[active], md: md[active], sm: mobile[active] }}
            breakpoints={{ lg: 1199, md: 799, sm: 0 }}
            cols={{ lg: 4, md: 4, sm: 2 }}
            containerPadding={[16, 32]}
            rowHeight={rowHeight}
            margin={[16, 16]}
          >
            {children}
          </Responsive>
        )}
      </div>
    </motion.div>
  );
};

export default Grid;
