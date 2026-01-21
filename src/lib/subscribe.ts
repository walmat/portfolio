import { useMutation } from "@tanstack/react-query";
import { z } from "zod/v4";

export const subscribeSchema = z.object({
  email: z.email("Invalid email address"),
});

export type SubscribeInput = z.infer<typeof subscribeSchema>;

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

async function subscribe(data: SubscribeInput): Promise<void> {
  // Run API call and minimum delay in parallel
  const [res] = await Promise.all([
    fetch("/api/subscribe", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    }),
    delay(800), // Minimum time to show loading state
  ]);

  if (!res.ok) {
    const { error } = await res.json();
    throw new Error(error || "Failed to subscribe");
  }
}

export function useSubscribe() {
  return useMutation({
    mutationFn: subscribe,
  });
}
