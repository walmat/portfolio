import { render, screen } from '@testing-library/react'

import Blog from './Blog'

describe('Blog component', () => {
  it('should render the heading', () => {
    const { container } = render(<Blog />)

    expect(screen.getByRole('heading', { name: /Blog/i })).toBeInTheDocument()
    expect(container.firstChild).toMatchSnapshot()
  })
})
