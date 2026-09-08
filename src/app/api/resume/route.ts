import { withOrigin } from "@/lib/resume";
import { buildResumeMarkdown } from "@/lib/resume-markdown";

export async function GET(request: Request) {
  const markdown = withOrigin(await buildResumeMarkdown(), new URL(request.url).origin);

  return new Response(markdown, {
    headers: {
      "Content-Type": "text/markdown; charset=utf-8",
      "Content-Disposition": 'inline; filename="matthew-wall.md"',
    },
  });
}
