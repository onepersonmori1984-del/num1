import { render, screen } from '@testing-library/react'
import Home from './page'

describe('Home page', () => { //Homeコンポーネントのテスト
  it('renders the heading', () => { //h1要素が正しく表示されるか
    render(<Home />) //仮想DOMに描画
    expect(screen.getByRole('heading', { name: 'Home' })).toBeInTheDocument() //Homeというテキストがあるか
  })

  it('renders links to about and blog', () => { //AboutとBlogへのリンクが正しく表示されるか
    render(<Home />) //仮想DOMに描画
    // 仮想DOMの中からAboutというリンクを探して。そのリンクのhref属性が/aboutであるか
    expect(screen.getByRole('link', { name: 'About' })).toHaveAttribute('href', '/about') //Aboutへのリンクがあるか
    expect(screen.getByRole('link', { name: 'Blog' })).toHaveAttribute('href', '/blog') //Blogへのリンクがあるか
  })
})
