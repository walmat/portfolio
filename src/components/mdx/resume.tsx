import type { MDXComponents } from "mdx/types";

// The resume renders the same markdown you get from the copy button, so it only
// needs the handful of block types that document uses.
export const resumeComponents: MDXComponents = {
  h2: (props) => (
    <h2
      className="text-2xl font-semibold text-foreground mt-10 mb-4 first:mt-0 pb-2 border-b-2 border-border"
      {...props}
    />
  ),

  h3: (props) => <h3 className="text-xl font-semibold text-foreground mt-6 mb-2" {...props} />,

  p: (props) => (
    <p
      className="text-[15px] leading-[26px] tracking-[0.5px] font-normal text-foreground mb-4"
      {...props}
    />
  ),

  strong: (props) => <strong className="font-semibold" {...props} />,

  em: (props) => (
    <em className="not-italic text-sm tracking-[0.5px] text-muted-foreground" {...props} />
  ),

  a: ({ href, ...props }) => {
    const external = typeof href === "string" && /^(https?:|mailto:)/.test(href);

    return (
      <a
        href={href}
        className="underline underline-offset-2 hover:no-underline transition-all duration-200 ease-out"
        {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
        {...props}
      />
    );
  },

  ul: (props) => (
    <ul
      className="list-disc pl-5 text-[15px] leading-[26px] tracking-[0.5px] text-foreground mb-4"
      {...props}
    />
  ),

  li: (props) => <li className="mb-2" {...props} />,
};
