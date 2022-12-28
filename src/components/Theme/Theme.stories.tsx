import { Story, Meta } from '@storybook/react/types-6-0'
import Theme from './Theme'

export default {
  title: 'Theme',
  component: Theme,
  args: {}
} as Meta

export const Basic: Story = (args) => <Theme {...args} />
