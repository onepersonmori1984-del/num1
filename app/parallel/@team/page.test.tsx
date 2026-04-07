import { render, screen } from '@testing-library/react'
import Streaming from './page'

describe('Parallel @team slot', () => {
  it('renders streaming content after delay', async () => {
    // 5秒待機を伴うため、テストではコンポーネントを直接実行して結果を確認
    const result = await Streaming()
    render(result) // streaming()実行。仮想DOMに描画
    
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Streaming Hevy Component')
    expect(screen.getByText(/5秒かかる処理が終了したら、このコンポーネント"div"が表示される。/)).toBeInTheDocument()
  }, 7000) // 引数。タイムアウトを7秒に設定
})
