"use client";

import { Switch } from "@/components";
import { useCardOpacity } from "@/hooks";

function Theme() {
  const opacity = useCardOpacity([]);

  return (
    <div
      style={{ opacity }}
      className="h-full w-full flex flex-col items-center justify-center rounded-[32px] overflow-hidden bg-card shadow-[inset_0_0_0_2px_var(--border)] cursor-grab active:cursor-grabbing"
    >
      <Switch />
    </div>
  );
}

export default Theme;
