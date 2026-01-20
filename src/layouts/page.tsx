"use client";

import React, { ReactNode } from "react";
import { motion } from "framer-motion";

type Props = {
  children: ReactNode;
  title: string;
  description: string;
};

const spring = {
  type: "spring" as const,
  stiffness: 300,
  damping: 30,
};

const variants = {
  hidden: { opacity: 0, transform: "translateY(-12px)" },
  enter: { opacity: 1, transform: "translateY(0px)", transition: spring },
  exit: { opacity: 0, transform: "translateY(12px)", transition: spring },
};

export const PageLayout = ({ children }: Props): React.ReactElement => (
  <motion.div
    initial="hidden"
    animate="enter"
    exit="exit"
    variants={variants}
    className="flex flex-col flex-1"
  >
    {children}
  </motion.div>
);
