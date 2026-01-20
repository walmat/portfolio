import { queryOptions, useSuspenseQuery } from '@tanstack/react-query'

export interface MediumFeed {
  url: string
  title: string
  link: string
  author: string
  description: string
  image: string
}

export interface MediumEnclosure {
  link?: string
}

export interface MediumPost {
  title: string
  pubDate: string
  link: string
  guid: string
  author: string
  thumbnail: string
  description: string
  content: string
  enclosure: MediumEnclosure
  categories: string[]
}

export interface MediumResponse {
  status: string
  feed: MediumFeed
  items: MediumPost[]
}

function getTrimmedDescription(description: string) {
  const matches = description.match(/<p>(.*?)<\/p>/)
  if (!matches) {
    return description
  }
  const [, match] = matches
  return match
}

async function getMediumPost(): Promise<MediumPost> {
  const res = await fetch(
    'https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@mtw.'
  )

  if (!res.ok) {
    throw new Error('Failed to fetch Medium data')
  }

  const data: MediumResponse = await res.json()

  if (!data.items.length) {
    throw new Error('No posts found')
  }

  const [post] = data.items

  return {
    ...post,
    description: getTrimmedDescription(post.description),
    title: post.title.replace(/&(lt|gt);|\//g, '')
  }
}

function selectMediumPost(data: MediumPost) {
  return {
    title: data.title,
    description: data.description,
    link: data.link,
    pubDate: data.pubDate
  }
}

export function mediumOptions() {
  return queryOptions({
    queryKey: ['medium'],
    queryFn: getMediumPost,
    select: selectMediumPost,
    refetchInterval: 30_000,
    staleTime: 30_000
  })
}

export function useLatestPost() {
  const { data } = useSuspenseQuery(mediumOptions())
  return data
}
