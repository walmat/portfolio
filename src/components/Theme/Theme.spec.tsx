import { render, screen } from '@testing-library/react'

import Theme from './Theme'

describe('Theme component', () => {
  it('should render the heading', () => {
    const { container } = render(<Theme />)

    expect(screen.getByRole('heading', { name: /Theme/i })).toBeInTheDocument()
    expect(container.firstChild).toMatchSnapshot()
  })
})
