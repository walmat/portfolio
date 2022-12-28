import { render, screen } from '@testing-library/react'

import Nebula from './Nebula'

describe('Nebula component', () => {
  it('should render the heading', () => {
    const { container } = render(<Nebula />)

    expect(screen.getByRole('heading', { name: /Nebula/i })).toBeInTheDocument()
    expect(container.firstChild).toMatchSnapshot()
  })
})
