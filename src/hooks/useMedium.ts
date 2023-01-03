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
  link: string
}

export const useMedium = () => {
  const [post, setPost] = useState({} as Item)

  const getPosts = async () => {
    try {
      const res = await fetch(
        'https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@mtw.'
      )

      const { status }: Welcome = await res.json()

      if (status !== 'ok') {
        throw new Error('Medium API is not responding')
      }

      const { items } = await res.json()
      if (!items.length) {
        throw new Error('No posts found')
      }

      setPost(items[0])
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
