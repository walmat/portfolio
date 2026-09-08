"use client";

import { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { AnimatePresence, motion, useAnimation } from "framer-motion";

import { Close } from "@/components/ui";
import { profile, withOrigin } from "@/lib/resume";

const button = {
  initial: { scale: 1 },
  animate: { scale: 1.1 },
};

const spring = {
  type: "spring" as const,
  stiffness: 400,
  damping: 30,
};

const stroke = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

const Glyph = ({ children }: { children: React.ReactNode }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="17"
    height="17"
    viewBox="0 0 24 24"
    aria-hidden="true"
    className="text-foreground"
  >
    {children}
  </svg>
);

const CopyIcon = () => (
  <Glyph>
    <rect x="9" y="9" width="12" height="12" rx="2" {...stroke} />
    <path d="M5 15H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v1" {...stroke} />
  </Glyph>
);

const DownloadIcon = () => (
  <Glyph>
    <path d="M12 3v12M7 11l5 5 5-5M4 20h16" {...stroke} />
  </Glyph>
);

const MailIcon = () => (
  <Glyph>
    <rect x="3" y="5" width="18" height="14" rx="2" {...stroke} />
    <path d="m3.5 7 8.5 6 8.5-6" {...stroke} />
  </Glyph>
);

const CheckIcon = () => (
  <Glyph>
    <path d="m4 12.5 5 5L20 6.5" {...stroke} />
  </Glyph>
);

type Action = "copy" | "download" | "email";

interface Props {
  markdown: string;
  children: React.ReactNode;
}

export function Resume({ markdown, children }: Props) {
  const router = useRouter();
  const animation = useAnimation();

  // Built with a placeholder origin so the page stays static.
  const [origin, setOrigin] = useState("");
  const [done, setDone] = useState<Action | null>(null);
  const [hovered, setHovered] = useState<Action | null>(null);

  useEffect(() => setOrigin(window.location.origin), []);

  const resolved = useMemo(() => withOrigin(markdown, origin), [markdown, origin]);

  useEffect(() => {
    if (!done) return;
    const timer = setTimeout(() => setDone(null), 2000);
    return () => clearTimeout(timer);
  }, [done]);

  const onCopy = async () => {
    try {
      await navigator.clipboard.writeText(resolved);
      setDone("copy");
    } catch {
      // Clipboard blocked. The markdown is on the page either way.
    }
  };

  const onDownload = () => {
    const blob = new Blob([resolved], { type: "text/markdown;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "matthew-wall.md";
    link.click();
    URL.revokeObjectURL(url);
    setDone("download");
  };

  const onEmail = () => {
    const subject = encodeURIComponent(`${profile.name} — ${profile.headline}`);
    // mailto has a length ceiling, so send the link rather than the document.
    const body = encodeURIComponent(`${origin}/resume`);
    window.location.href = `mailto:?subject=${subject}&body=${body}`;
    setDone("email");
  };

  const actions: { key: Action; label: string; Icon: React.FC; onClick: () => void }[] = [
    { key: "copy", label: "Copy markdown", Icon: CopyIcon, onClick: onCopy },
    { key: "download", label: "Download .md", Icon: DownloadIcon, onClick: onDownload },
    { key: "email", label: "Email it", Icon: MailIcon, onClick: onEmail },
  ];

  return (
    <>
      <motion.button
        aria-label="Back to home"
        onTap={() => router.push("/")}
        animate={animation}
        variants={button}
        onHoverStart={() => animation.start("animate")}
        onHoverEnd={() => animation.start("initial")}
        className="absolute w-[46px] h-[46px] top-[37px] left-8 md:left-[calc(50%-23px)] rounded-[23px] flex items-center justify-center transition-all duration-300 ease-out bg-secondary border-2 border-border hover:cursor-pointer hover:bg-muted"
      >
        <Close />
      </motion.button>

      <motion.div
        initial={{ opacity: 0, transform: "translateY(12px)" }}
        animate={{ opacity: 1, transform: "translateY(0px)" }}
        transition={spring}
        className="absolute top-[120px] w-full will-change-[opacity,transform]"
      >
        <div className="mx-auto max-w-[320px] md:max-w-[800px] px-0 md:px-8 py-[50px] md:py-[60px]">
          <div className="flex flex-col items-start gap-4 mb-6 md:flex-row md:items-center md:justify-between">
            <h2 className="text-4xl leading-[48px] font-normal text-foreground">{profile.name}</h2>
            <div className="flex gap-2">
              {actions.map(({ key, label, Icon, onClick }) => (
                <div key={key} className="relative flex">
                  <button
                    onClick={onClick}
                    aria-label={label}
                    onMouseEnter={() => setHovered(key)}
                    onMouseLeave={() => setHovered(null)}
                    onFocus={() => setHovered(key)}
                    onBlur={() => setHovered(null)}
                    className="w-[38px] h-[38px] flex items-center justify-center rounded-[19px] transition-all duration-200 ease-out bg-secondary border-2 border-border hover:cursor-pointer hover:bg-muted"
                  >
                    {done === key ? <CheckIcon /> : <Icon />}
                  </button>
                  <AnimatePresence>
                    {hovered === key && (
                      <motion.span
                        role="tooltip"
                        initial={{ opacity: 0, transform: "translate(-50%, 4px) scale(0.96)" }}
                        animate={{ opacity: 1, transform: "translate(-50%, 0px) scale(1)" }}
                        exit={{ opacity: 0, transform: "translate(-50%, 4px) scale(0.96)" }}
                        transition={spring}
                        style={{ transformOrigin: "top center" }}
                        className="absolute top-[46px] left-1/2 z-[2] whitespace-nowrap rounded-[14px] px-3 py-1.5 text-sm tracking-[0.25px] bg-secondary text-foreground border-2 border-border pointer-events-none"
                      >
                        {label}
                      </motion.span>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </div>

          <div className="w-full rounded-[32px] bg-card p-8 md:p-12 shadow-[inset_0_0_0_2px_var(--border)]">
            {children}
          </div>
        </div>
      </motion.div>
    </>
  );
}
