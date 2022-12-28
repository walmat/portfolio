import { Story, Meta } from '@storybook/react/types-6-0'
import Blog from './Blog'

export default {
  title: 'Blog',
  component: Blog,
  args: {}
} as Meta

export const Basic: Story = (args) => <Blog {...args} />
