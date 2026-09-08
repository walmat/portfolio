"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useFiltersContext } from "@/providers/filters";

const spring = {
  type: "spring" as const,
  stiffness: 400,
  damping: 30,
};

const Filters = () => {
  const { active, options, setActive } = useFiltersContext();

  return (
    <div className="relative flex text-sm rounded-[23px] bg-foreground/5 dark:bg-transparent p-[5px] border-2 border-border">
      <div className="relative flex">
        {options.map((option) => (
          <button
            key={option}
            onClick={() => setActive(option)}
            className="relative z-[2] rounded-full flex items-center h-8 px-2.5 md:px-4 cursor-pointer"
          >
            {active === option && (
              <motion.div
                layoutId="filter-pill"
                transition={spring}
                className="absolute inset-0 bg-inverted rounded-[16px]"
              />
            )}
            <span
              className={`relative z-[1] text-sm font-normal transition-opacity duration-200 text-foreground ${
                active !== option ? "hover:opacity-50" : ""
              }`}
            >
              {option}
            </span>
          </button>
        ))}

        {/* The nav hides its resume link below md, so it rides along here. It
            never takes the pill, which is what keeps it reading as a link
            rather than a fifth filter. */}
        <Link href="/resume" className="relative z-[2] flex items-center h-8 px-2.5 md:hidden">
          <span className="text-sm font-normal text-foreground transition-opacity duration-200 hover:opacity-50">
            Resume
          </span>
        </Link>
      </div>
    </div>
  );
};

export default Filters;
