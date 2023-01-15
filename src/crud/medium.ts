import { Welcome } from 'hooks'

export const getPosts = async (): Promise<Welcome> => {
  const res = await fetch(
    'https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@mtw.'
  )
  return await res.json()
}
