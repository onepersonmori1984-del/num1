import { render, screen } from '@testing-library/react'
import Header from './Header' //Header.tsxをインポート


describe('Header component', () => {                //Headerコンポーネントのテスト
  it('renders navigation links', () => {           //ナビゲーションリンクが正しく表示されるか
    render(<Header />)                            //仮想DOMに描画
    expect(screen.getByText('Home')).toBeInTheDocument() //Homeというテキストがあるか
    expect(screen.getByText('About')).toBeInTheDocument() //Aboutというテキストがあるか
    expect(screen.getByText('Blog')).toBeInTheDocument() //Blogというテキストがあるか
  })
})