import { Story, Meta } from '@storybook/react/types-6-0'
import Project from './Project'

export default {
  title: 'Project',
  component: Project,
  args: {}
} as Meta

export const Basic: Story = (args) => <Project {...args} />
