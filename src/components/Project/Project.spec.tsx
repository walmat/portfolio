import { render, screen } from '@testing-library/react'

import Project from './Project'

describe('Project component', () => {
  it('should render the heading', () => {
    const { container } = render(<Project />)

    expect(
      screen.getByRole('heading', { name: /Project/i })
    ).toBeInTheDocument()
    expect(container.firstChild).toMatchSnapshot()
  })
})
