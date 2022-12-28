import { render, screen } from '@testing-library/react'

import Filters from './Filters'

describe('Filters component', () => {
  it('should render the heading', () => {
    const { container } = render(<Filters />)

    expect(
      screen.getByRole('heading', { name: /Filters/i })
    ).toBeInTheDocument()
    expect(container.firstChild).toMatchSnapshot()
  })
})
