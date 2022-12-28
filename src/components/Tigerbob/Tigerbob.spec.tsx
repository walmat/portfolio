import { render, screen } from '@testing-library/react'

import Tigerbob from './Tigerbob'

describe('Tigerbob component', () => {
  it('should render the heading', () => {
    const { container } = render(<Tigerbob />)

    expect(
      screen.getByRole('heading', { name: /Tigerbob/i })
    ).toBeInTheDocument()
    expect(container.firstChild).toMatchSnapshot()
  })
})
