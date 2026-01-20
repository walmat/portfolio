import type { MDXComponents } from "mdx/types";
import { ImageGallery } from "./ImageGallery";
import { MobileScreenshots } from "./MobileScreenshots";
import { RainbowLettermark } from "./RainbowLettermark";

export const mdxComponents: MDXComponents = {
  ImageGallery,
  MobileScreenshots,
  RainbowLettermark,

  h2: (props) => <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4" {...props} />,

  h3: (props) => <h3 className="text-xl font-semibold text-foreground mt-8 mb-3" {...props} />,

  p: (props) => (
    <p
      className="text-[15px] leading-[26px] tracking-[0.5px] font-normal text-foreground mb-4"
      {...props}
    />
  ),

  strong: (props) => <strong className="font-semibold" {...props} />,

  a: (props) => (
    <a
      className="underline hover:no-underline transition-all duration-200 ease-out"
      target="_blank"
      rel="noopener noreferrer"
      {...props}
    />
  ),

  ul: (props) => (
    <ul
      className="list-disc list-inside text-[15px] leading-[26px] tracking-[0.5px] text-foreground mb-4"
      {...props}
    />
  ),

  ol: (props) => (
    <ol
      className="list-decimal list-inside text-[15px] leading-[26px] tracking-[0.5px] text-foreground mb-4"
      {...props}
    />
  ),

  li: (props) => <li className="mb-1" {...props} />,

  blockquote: (props) => (
    <blockquote
      className="border-l-4 border-border pl-4 italic text-muted-foreground mb-4"
      {...props}
    />
  ),
};
