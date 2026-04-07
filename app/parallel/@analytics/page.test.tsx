import { render, screen } from '@testing-library/react'
import Page from './page'

describe('Parallel @analytics slot', () => {
  it('renders analytics content', () => {
    render(<Page />)
    // (level: 2)H2にAnalytics Contentがあるか
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('Analytics Content')
  })
})
