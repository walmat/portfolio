import { useEffect, useState } from 'react'

export interface Welcome {
  status: string
  feed: Feed
  items: Item[]
}

export interface Feed {
  url: string
  title: string
  link: string
  author: string
  description: string
  image: string
}

export interface Item {
  title: string
  pubDate: Date
  link: string
  guid: string
  author: string
  thumbnail: string
  description: string
  content: string
  enclosure: Enclosure
  categories: string[]
}

export interface Enclosure {
  link?: string
}

const getTrimmedDescription = (description: string) => {
  const matches = description.match(/<p>(.*?)<\/p>/)
  if (!matches) {
    return description
  }

  const [, match] = matches
  return match
}

export const useMedium = (initialState: Item) => {
  const [post, setPost] = useState(initialState)

  const getPosts = async () => {
    try {
      const res = await fetch(
        'https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@mtw.'
      )

      const { items }: Welcome = await res.json()
      if (!items.length) {
        throw new Error('No posts found')
      }

      const [firstPost] = items

      const desc = getTrimmedDescription(firstPost.description)
      firstPost.description = desc
      setPost(firstPost)
    } catch (_) {
      // noop
    }
  }

  useEffect(() => {
    getPosts()
    const interval = setInterval(getPosts, 30_000)
    return () => clearInterval(interval)
  }, [])

  return {
    post
  }
}
