import { Main } from 'components'
import { Welcome } from 'hooks'
import { PageLayout } from 'layouts'

interface HomeProps {
  post: Welcome
}

function Home({ post }: HomeProps) {
  return (
    <PageLayout
      title="mtw."
      description="An aspiring homesteader and avid believer that Web3 has the potential to change the world."
    >
      <Main post={post} />
    </PageLayout>
  )
}

Home.getInitialProps = async () => {
  try {
    const res = await fetch(
      'https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@mtw.'
    )

    const { items }: Welcome = await res.json()
    if (!items.length) {
      throw new Error('No posts found')
    }

    const [post] = items
    return {
      post
    }
  } catch (_) {
    return {
      post: null
    }
  }
}

export default Home
