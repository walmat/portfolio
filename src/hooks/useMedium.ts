import { getPosts } from 'crud'
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
  pubDate: string
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

export const useMedium = (initialState?: Item) => {
  const [post, setPost] = useState(initialState)

  const getFeed = async () => {
    try {
      const { items } = await getPosts()
      if (!items.length) {
        throw new Error('No posts found')
      }

      const [post] = items

      const desc = getTrimmedDescription(post.description)
      post.description = desc
      post.title = post.title.replace(/&(lt|gt);|\//g, '')
      setPost(post)
    } catch (_) {
      // noop
    }
  }

  useEffect(() => {
    getFeed()
    const interval = setInterval(getFeed, 30_000)
    return () => clearInterval(interval)
  }, [])

  return {
    post
  }
}
