"use client";

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
            className="relative z-[2] rounded-full flex items-center h-8 px-4 cursor-pointer"
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
      </div>
    </div>
  );
};

export default Filters;
