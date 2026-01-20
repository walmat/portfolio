import { useMutation } from '@tanstack/react-query'
import { z } from 'zod/v4'

export const subscribeSchema = z.object({
  email: z.email('Invalid email address')
})

export type SubscribeInput = z.infer<typeof subscribeSchema>

async function subscribe(data: SubscribeInput): Promise<void> {
  const res = await fetch('/api/subscribe', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  })

  if (!res.ok) {
    const { error } = await res.json()
    throw new Error(error || 'Failed to subscribe')
  }
}

export function useSubscribe() {
  return useMutation({
    mutationFn: subscribe
  })
}
