import { render, screen } from '@testing-library/react'

import Recur from './Recur'

describe('Recur component', () => {
  it('should render the heading', () => {
    const { container } = render(<Recur />)

    expect(screen.getByRole('heading', { name: /Recur/i })).toBeInTheDocument()
    expect(container.firstChild).toMatchSnapshot()
  })
})
