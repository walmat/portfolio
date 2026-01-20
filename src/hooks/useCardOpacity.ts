import { useFiltersContext } from '@/providers'
import { getOpacity } from '@/utils'

export function useCardOpacity(categories: string[]) {
  const { active } = useFiltersContext()
  return getOpacity(categories, active)
}
