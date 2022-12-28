import { render, screen } from '@testing-library/react'

import Switch from './Switch'

describe('Switch component', () => {
  it('should render the heading', () => {
    const { container } = render(<Switch />)

    expect(screen.getByRole('heading', { name: /Switch/i })).toBeInTheDocument()
    expect(container.firstChild).toMatchSnapshot()
  })
})
