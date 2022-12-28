import { render, screen } from '@testing-library/react'

import Contact from './Contact'

describe('Contact component', () => {
  it('should render the heading', () => {
    const { container } = render(<Contact />)

    expect(
      screen.getByRole('heading', { name: /Contact/i })
    ).toBeInTheDocument()
    expect(container.firstChild).toMatchSnapshot()
  })
})
