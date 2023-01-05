export const getOpacity = (matches: string[], current: string) => {
  if (current === 'All') return 1

  return matches.includes(current) ? 1 : 0.4
}

export * from './datadog'
