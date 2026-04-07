import { render, screen } from '@testing-library/react'
import BlogDetail from './page'

describe('Blog detail page', () => {
  it('renders the blog ID from params', async () => {
    const params = Promise.resolve({ id: '123' })
    // RSCは非同期関数のため、直接レンダリング結果をawait
    const result = await BlogDetail({ params })
    render(result)
    
    expect(screen.getByRole('heading')).toHaveTextContent('Blog ID: 123')
  })
})
