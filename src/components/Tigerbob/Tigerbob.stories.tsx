import { Story, Meta } from '@storybook/react/types-6-0'
import Tigerbob from './Tigerbob'

export default {
  title: 'Tigerbob',
  component: Tigerbob,
  args: {}
} as Meta

export const Basic: Story = (args) => <Tigerbob {...args} />
