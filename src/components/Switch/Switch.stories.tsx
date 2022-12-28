import { Story, Meta } from '@storybook/react/types-6-0'
import Switch from './Switch'

export default {
  title: 'Switch',
  component: Switch,
  args: {}
} as Meta

export const Basic: Story = (args) => <Switch {...args} />
