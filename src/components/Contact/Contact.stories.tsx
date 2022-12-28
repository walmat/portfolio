import { Story, Meta } from '@storybook/react/types-6-0'
import Contact from './Contact'

export default {
  title: 'Contact',
  component: Contact,
  args: {}
} as Meta

export const Basic: Story = (args) => <Contact {...args} />
