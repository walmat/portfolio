import { Story, Meta } from '@storybook/react/types-6-0'
import Spotify from './Spotify'

export default {
  title: 'Spotify',
  component: Spotify,
  args: {}
} as Meta

export const Basic: Story = (args) => <Spotify {...args} />
