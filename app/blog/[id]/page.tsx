// 動的ルーティング。

// props = 引数, id = URLのパラメータ, 引数の型定義。
// 「このコンポーネントには params っていうオブジェクトが渡ってきて、その中に idっていう文字列が入ってるよ」
// 非同期： A をやってる間に、B も進めていい

type Props = {
  params: Promise<{ id: string }>
}

// 「props.params は、今すぐ { id: string } が入ってるんじゃなくて、
// あとで { id: string } が入る“約束の箱（Promise）”だよ」


// Next.jsのルーター（内部）が自動的に取得してる。
// app/blog/[id]/page.tsx　から[id]を取得してparmsに格納。propsに渡してる。

export default async function BlogDetail({ params }: Props) {
  // await で Promise の中身を取り出す
  const { id } = await params
  return <h1>Blog ID: {id}</h1>
}