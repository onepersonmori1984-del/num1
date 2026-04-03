// 全ページ共通UI


import type { Metadata } from "next"
import "@/globals.css"
import Header from "@/components/Header/Header"


// metadata は「このページの説明書」みたいなもの
// ブラウザや検索エンジンに渡す情報をまとめている。
// 全ページ共通のメタ情報を設定する

export const metadata: Metadata = {
  title: "My App",
  description: "My Next.js App",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      {/* 実際のコンテンツ。コンポーネントとしてのヘッダーが入る。childrenには各ページの内容が入る */}
      <body>
        <Header />
        <main>{children}</main>
      </body>
    </html>
  )
}