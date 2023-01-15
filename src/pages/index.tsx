import { Main } from 'components'
import { getPosts } from 'crud'
import { Item } from 'hooks'
import { PageLayout } from 'layouts'
import { MediumProvider } from 'providers'

interface HomeProps {
  post?: Item
}

function Home({ post }: HomeProps) {
  return (
    <MediumProvider initialState={post}>
      <PageLayout
        title="mtw."
        description="An aspiring homesteader and avid believer that Web3 has the potential to change the world."
      >
        <Main />
      </PageLayout>
    </MediumProvider>
  )
}

Home.getInitialProps = async () => {
  try {
    const { items } = await getPosts()
    if (!items.length) {
      throw new Error('No posts found')
    }

    const [post] = items
    return {
      post
    }
  } catch (_) {
    return {}
  }
}

export default Home
