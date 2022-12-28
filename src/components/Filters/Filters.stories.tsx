import { Story, Meta } from '@storybook/react/types-6-0'
import Filters from './Filters'

export default {
  title: 'Filters',
  component: Filters,
  args: {}
} as Meta

export const Basic: Story = (args) => <Filters {...args} />
