"use client";

import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useFiltersContext } from "@/providers/filters";

const spring = {
  type: "spring" as const,
  stiffness: 400,
  damping: 30,
};

const Filters = () => {
  const { active, options, setActive } = useFiltersContext();
  const containerRef = useRef<HTMLDivElement>(null);
  const optionRefs = useRef<Map<string, HTMLButtonElement>>(new Map());
  const [pillStyle, setPillStyle] = useState({ x: 0, width: 0 });

  useEffect(() => {
    const activeEl = optionRefs.current.get(active);
    const container = containerRef.current;

    if (activeEl && container) {
      const containerRect = container.getBoundingClientRect();
      const activeRect = activeEl.getBoundingClientRect();

      setPillStyle({
        x: activeRect.left - containerRect.left,
        width: activeRect.width,
      });
    }
  }, [active]);

  return (
    <div className="relative flex text-sm rounded-[23px] bg-foreground/5 dark:bg-transparent p-[5px] border-2 border-border">
      <div ref={containerRef} className="relative flex">
        {pillStyle.width > 0 && (
          <motion.div
            initial={false}
            transition={spring}
            animate={{
              x: pillStyle.x,
              width: pillStyle.width,
            }}
            className="absolute z-[1] h-8 bg-inverted rounded-[16px]"
          />
        )}
        {options.map((option) => (
          <button
            key={option}
            ref={(el) => {
              if (el) optionRefs.current.set(option, el);
            }}
            onClick={() => setActive(option)}
            className="relative z-[2] rounded-[50px] flex items-center h-8 px-4 cursor-pointer"
          >
            <span
              className={`text-sm font-normal transition-opacity duration-200 text-foreground ${
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
