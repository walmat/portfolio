import { Story, Meta } from '@storybook/react/types-6-0'
import Nebula from './Nebula'

export default {
  title: 'Nebula',
  component: Nebula,
  args: {}
} as Meta

export const Basic: Story = (args) => <Nebula {...args} />
