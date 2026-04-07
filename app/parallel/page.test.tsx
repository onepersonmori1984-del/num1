import { render, screen } from '@testing-library/react'
import Page from './page'

describe('Parallel main page', () => {
  it('renders the content', () => {
    render(<Page />)
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Main Content')
    expect(screen.getByRole('heading', { level: 3 })).toHaveTextContent('Parallel Routesを用いる事で、ルーティング単位の分割')
    expect(screen.getByText(/同じURLを共有する事が出来る。モーダルの実装で腑に落ちるはず。/)).toBeInTheDocument()
  })
})
