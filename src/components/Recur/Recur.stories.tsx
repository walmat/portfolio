import { Story, Meta } from '@storybook/react/types-6-0'
import Recur from './Recur'

export default {
  title: 'Recur',
  component: Recur,
  args: {}
} as Meta

export const Basic: Story = (args) => <Recur {...args} />
