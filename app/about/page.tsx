// app/about/page.tsx
// ① ブラウザが /about にアクセス
// ② Next.jsのルーターが app/about/page.tsx を特定
// ③ About() が「サーバーで」実行される
// ④ JSX → React要素（オブジェクト）に変換
// ⑤ ReactがHTML文字列にレンダリング
// ⑥ HTMLがブラウザに送信される
// ⑦ ブラウザが表示

// リアクトの世界では関数＝コンポーネント。
export default function About() {
  return <h1>About</h1>
}