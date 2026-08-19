import type { MDXRemoteProps } from "next-mdx-remote/rsc";

// next-mdx-remote v6 blocks JS expressions in MDX by default. Our content lives
// in this repo and is authored by hand — it needs expressions for component
// props like <MobileScreenshots screenshots={[...]} />. blockDangerousJS stays
// on, so eval/Function/require and friends are still off limits.
export const mdxOptions: MDXRemoteProps["options"] = {
  blockJS: false,
  blockDangerousJS: true,
};
