"use client";

import Link from "next/link";
import { Filters, Grid } from "@/components";
import type { ProjectFrontmatter } from "@/lib/projects";

interface Props {
  projects: ProjectFrontmatter[];
}

const Main = ({ projects }: Props) => (
  <div className="flex flex-1 flex-col">
    <nav className="flex items-center justify-center flex-col h-[180px] md:h-[136px] md:flex-row md:justify-between w-full px-[3.5vw]">
      <h1 className="text-5xl font-bold my-9 md:my-0 leading-none h-[42px] bg-gradient-to-r from-[#776af2] via-[#a097fd] to-[#776af2] bg-[length:400%_100%] text-transparent bg-clip-text animate-[move-bg_30s_infinite_linear]">
        mtw.
      </h1>
      <Filters />
      <Link target="_blank" href="https://linkedin.com/in/walmat" className="hidden md:flex">
        <p className="inline-block text-[15px] leading-[26px] tracking-[0.5px] font-normal text-[var(--text-primary)] transition-all duration-200 ease-in-out hover:opacity-50 hover:cursor-pointer">
          Connect
        </p>
      </Link>
    </nav>
    <Grid projects={projects} />
  </div>
);

export default Main;
