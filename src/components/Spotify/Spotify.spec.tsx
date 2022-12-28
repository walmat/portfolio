import { render, screen } from '@testing-library/react'

import Spotify from './Spotify'

describe('Spotify component', () => {
  it('should render the heading', () => {
    const { container } = render(<Spotify />)

    expect(
      screen.getByRole('heading', { name: /Spotify/i })
    ).toBeInTheDocument()
    expect(container.firstChild).toMatchSnapshot()
  })
})
