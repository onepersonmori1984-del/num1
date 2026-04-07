import { render, screen } from '@testing-library/react'
import Blog from './page'

describe('Blog list page', () => { //Blog一覧ページのテスト
  it('renders the heading', () => { //h1要素が正しく表示されるか
    render(<Blog />) //仮想DOMに描画
    expect(screen.getByRole('heading', { name: 'Blog List' })).toBeInTheDocument() // H1にBlog Listがあるか。
  })

  it('renders blog link and home link', () => { //Blog 1とHomeへのリンクが正しく表示されるか
    render(<Blog />) //仮想DOMに描画
    expect(screen.getByRole('link', { name: 'Blog 1' })).toHaveAttribute('href', '/blog/1') //Blog 1へのリンクがあるか
    expect(screen.getByRole('link', { name: 'Home' })).toHaveAttribute('href', '/')
  })
})
