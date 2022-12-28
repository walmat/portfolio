import { render, screen } from '@testing-library/react'

import Biography from './Biography'

describe('Biography component', () => {
  it('should render the heading', () => {
    const { container } = render(<Biography />)

    expect(
      screen.getByRole('heading', { name: /Biography/i })
    ).toBeInTheDocument()
    expect(container.firstChild).toMatchSnapshot()
  })
})
