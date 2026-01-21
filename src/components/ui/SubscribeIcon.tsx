"use client";

import { motion } from "framer-motion";

export type IconState = "idle" | "pending" | "success" | "error";

interface SubscribeIconProps {
  state: IconState;
}

// All paths use identical structure: M C C (move + 2 cubic beziers)
// This allows Framer Motion to interpolate between them smoothly

const paths = {
  idle: {
    // Arrow diagonal: line from (5,13) to (13,5)
    d1: "M 5 13 C 7 11 11 7 13 5 C 13 5 13 5 13 5",
    // Arrow corner: L-shape from (8,5) to (13,5) to (13,10)
    d2: "M 8 5 C 10.5 5 13 5 13 5 C 13 5 13 7.5 13 10",
  },
  pending: {
    // Semicircle: top(9,4) → right(14,9) → bottom(9,14) using k=0.552
    d1: "M 9 4 C 11.76 4 14 6.24 14 9 C 14 11.76 11.76 14 9 14",
    // Quarter: bottom(9,14) → left(4,9), then stop (90° gap remains)
    d2: "M 9 14 C 6.24 14 4 11.76 4 9 C 4 9 4 9 4 9",
  },
  success: {
    // Checkmark stroke 1: start of check
    d1: "M 4 9 C 5 10 6 11 7 12 C 7 12 7 12 7 12",
    // Checkmark stroke 2: end of check
    d2: "M 7 12 C 9 10 11 7 14 5 C 14 5 14 5 14 5",
  },
  error: {
    // X diagonal 1: top-left to bottom-right
    d1: "M 5 5 C 7 7 11 11 13 13 C 13 13 13 13 13 13",
    // X diagonal 2: bottom-left to top-right
    d2: "M 5 13 C 7 11 11 7 13 5 C 13 5 13 5 13 5",
  },
};

const colors: Record<IconState, string> = {
  idle: "currentColor",
  pending: "currentColor",
  success: "#22c55e",
  error: "#ef4444",
};

const spring = {
  type: "spring" as const,
  stiffness: 400,
  damping: 25,
};

export function SubscribeIcon({ state }: SubscribeIconProps) {
  const currentPaths = paths[state];
  const strokeColor = colors[state];

  return (
    <motion.svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      viewBox="0 0 18 18"
      className="text-foreground"
    >
      <motion.g
        animate={{ rotate: state === "pending" ? 360 : 0 }}
        transition={
          state === "pending"
            ? { rotate: { duration: 0.8, repeat: Infinity, ease: "linear" } }
            : spring
        }
        style={{ transformOrigin: "9px 9px" }}
      >
        <motion.path
          initial={false}
          animate={{ d: currentPaths.d1, stroke: strokeColor }}
          transition={{ d: spring, stroke: { duration: 0.2 } }}
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2.5"
        />
        <motion.path
          initial={false}
          animate={{
            d: currentPaths.d2,
            stroke: strokeColor,
            opacity: state === "pending" ? 0.4 : 1,
          }}
          transition={{ d: spring, stroke: { duration: 0.2 }, opacity: { duration: 0.2 } }}
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2.5"
        />
      </motion.g>
    </motion.svg>
  );
}
