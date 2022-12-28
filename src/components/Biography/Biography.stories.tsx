import { Story, Meta } from '@storybook/react/types-6-0'
import Biography from './Biography'

export default {
  title: 'Biography',
  component: Biography,
  args: {}
} as Meta

export const Basic: Story = (args) => <Biography {...args} />
