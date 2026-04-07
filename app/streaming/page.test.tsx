import { render, screen } from '@testing-library/react'
import Streaming from './page'

describe('Streaming page', () => {
  it('renders heavy content after delay', async () => {
    const result = await Streaming()
    render(result)
    
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Streaming Hevy Component')
    expect(screen.getByText(/5秒かかる処理が終了したら、このコンポーネント"div"が表示される。/)).toBeInTheDocument()
  }, 7000) // タイムアウトを7秒に設定
})
