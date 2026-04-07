import { render, screen, waitFor } from '@testing-library/react'
import PostsPage from './page'
import { vi } from 'vitest'

// 本物の API を呼ばない(fetchしない。).
global.fetch = vi.fn()

describe('useEffect page (PostsPage)', () => {
  it('renders posts after fetching data', async () => {
    // モックデータを返す
    const mockPosts = [
      { id: 1, title: 'Test Post 1', body: 'Body 1' },
      { id: 2, title: 'Test Post 2', body: 'Body 2' },
    ]

    // global.fetchしたら、jsonのmockPostsを返す。
    ;(global.fetch as any).mockResolvedValueOnce({
      json: async () => mockPosts,
    })

    render(<PostsPage />)

    expect(screen.getByText('投稿一覧')).toBeInTheDocument()

    // データの取得と再レンダリングを待つ
    await waitFor(() => {
  // h2（タイトル）
      expect(
        screen.getByRole('heading', { level: 2, name: 'Test Post 1' })
      ).toBeInTheDocument()

      expect(
        screen.getByRole('heading', { level: 2, name: 'Test Post 2' })
      ).toBeInTheDocument()

      // p（本文）
      expect(screen.getByText('Body 1')).toBeInTheDocument()
      expect(screen.getByText('Body 2')).toBeInTheDocument()

      // 区切り線
      expect(screen.getAllByText('--------------------').length).toBe(2)
    })

  })
})
