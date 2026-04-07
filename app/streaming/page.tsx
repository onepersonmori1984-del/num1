// Next.jsのストリーミング機能を実装する。

export default async function Streaming() {
  await new Promise((resolve) => setTimeout(resolve, 5000));
  return (
    <div>
      <h1>Streaming Hevy Component</h1>
      <p>5秒かかる処理が終了したら、このコンポーネント"div"が表示される。</p>
    </div>
  )
}
