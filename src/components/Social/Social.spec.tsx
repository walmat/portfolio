import { render, screen } from '@testing-library/react'

import Social from './Social'

describe('Social component', () => {
  it('should render the heading', () => {
    const { container } = render(<Social />)

    expect(screen.getByRole('heading', { name: /Social/i })).toBeInTheDocument()
    expect(container.firstChild).toMatchSnapshot()
  })
})
