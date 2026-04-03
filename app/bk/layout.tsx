// app/layout.tsx

import type { Metadata } from "next" // ページのメタ情報（タイトルなど）を型安全に扱うための型
import Link from "next/link" // Next.jsの公式リンクコンポーネント（高速なページ遷移ができる）
import "./globals.css" // 全体に適用するCSS（グローバルスタイル）

// サイト全体のメタ情報（SEOやタブタイトルに使われる）
export const metadata: Metadata = {
  title: "My App", // ブラウザのタブに表示されるタイトル
  description: "My Next.js App", // 検索エンジン用の説明文
}

// ルートレイアウト（全ページ共通のUI）
export default function RootLayout({
  children, // 各ページの中身がここに入る
}: {
  children: React.ReactNode // Reactの「中に入る要素」の型
}) {
  return (
    <html lang="ja"> {/* HTML全体（言語設定：日本語） */}
      <body> {/* 実際に表示される部分 */}

        {/* ===== ヘッダー（全ページ共通） ===== */}
        <header style={{ padding: "10px", borderBottom: "1px solid #ccc" }}>
          <nav style={{ display: "flex", gap: "10px" }}>
            {/* トップページへのリンク */}
            <Link href="/">Home</Link>

            {/* Aboutページ */}
            <Link href="/about">About</Link>

            {/* Blog一覧 */}
            <Link href="/blog">Blog</Link>
          </nav>
        </header>

        {/* ===== メインコンテンツ ===== */}
        <main style={{ padding: "20px" }}>
          {children} {/* ← 各ページの内容がここに表示される */}
        </main>

      </body>
    </html>
  )
}