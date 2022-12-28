import { Story, Meta } from '@storybook/react/types-6-0'
import Grid from './Grid'

export default {
  title: 'Grid',
  component: Grid,
  args: {}
} as Meta

export const Basic: Story = (args) => <Grid {...args} />
