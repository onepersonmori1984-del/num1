import { render, screen } from '@testing-library/react'
import About from './page' //about/page.tsxをインポート

describe('About page', () => { //Aboutコンポーネントのテスト
  it('renders the heading', () => { //h1要素が正しく表示されるか
    render(<About />) //仮想DOMに描画
    const heading = screen.getByRole('heading') //h1要素を取得
    expect(heading).toHaveTextContent('About') //Aboutというテキストがあるか
  })
})