
// トップページ
// React Server Components なので、デフォルトでサーバーサイドで構築され、レンダリングされる。
// 　⇒SEOに強くなる。初期表示が速くなる。

// link は a よりも早い。SPA的遷移（Nextの本領）⇒ UX・速度・キャッシュすべてに影響
import Link from "next/link"

// ファイルのメインコンポーネントを定義　ファイル名でルーティング。
export default function Home() {
  // UIの見た目を返す。JSX
  return (
    <div>
      {/* React.createElement("h1", null, "Home") と表示される */}
      <h1>Home</h1> 

      <Link href="/about">About</Link>
      <br />
      <Link href="/blog">Blog</Link>
      <br />
      <Link href="/blog/1">Blog 1</Link>
      {/* 「URLの一部を変数として扱う」 ⇒ 動的ルーティング */}
    </div>
  )
}
// これはただの関数扱い。export default でエクスポートすることで、Next.jsが認識してルーティングしてくれる。
// ① URL / にアクセス
// ② app/page.tsx が呼ばれる
// ③ Home() が実行される
// ④ JSXがHTMLに変換される
// ⑤ ブラウザに表示