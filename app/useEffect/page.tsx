"use client"; // ←① クライアントコンポーネント宣言
// useEffectは、コンポーネントがマウントされたときに実行される関数。外部からデータを取得するときなどに使用。
// ←② フックをimport ただのコンポーネントでなく、機能強化したコンポーネントにする宣言。
// useState → データを持つ / useEffect → 処理を実行する
import { useEffect, useState } from "react"; 

// ① クライアントコンポーネントで
// ② useEffect を使って
// ③ ダミーAPI（JSONPlaceholder）からデータ取得して表示



type Post = {
  id: number;
  title: string;
  body: string;
};

//  {
//     "userId": 1,
//     "id": 1,
//     "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
//     "body": "quia et suscipit\nsuscipit recusandae corerum est autem sunt rem eveniet architecto"
//   },

export default function PostsPage() {
  // ←③ state定義（データ格納）posts = データ / setPosts = データ(posts)更新関数 useState = 状態管理(箱) 初期値は空
  const [posts, setPosts] = useState<Post[]>([]);

  // useEffectの機能を使用。（外部からのデータ取得）
  // fetch = Web からデータを取ってくるための関数
  useEffect(() => {
    const fetchPosts = async () => {                                                 // async = 非同期処理
      const res = await fetch("https://jsonplaceholder.typicode.com/posts");         // await = 完了を待つ
      const data = await res.json();                                                 // json() = JSON形式のデータをJavaScriptのオブジェクトに変換
      setPosts(data);                                                                // - posts の中身が data に置き換わる
                                                                                     // - React が「UI を更新しなきゃ！」と再レンダリング　⇒React は 直接 posts に代入しても UI を更新しない。
                                                                                     // - setPosts で画面に投稿一覧が表示される

    };

    fetchPosts();
  }, []); // ←⑤ 初回のみレンダリング実行

  // ←⑥ UI描画
  return (
    <div>
      <h1>投稿一覧</h1>
      {/* {} はjsx をjavascript に変換するおまじない。
      posts.map でデータ表示。mapは配列をループして、それぞれをJSXに変換する関数
      postsから要素を1こづつ取り出してpostという変数に入れる。idをkey(基準)にしてそれに紐づくtitleやbodyを表示 */}
      {posts.map((post) => ( 
        <div key={post.id}>
          <p>--------------------</p>
          <h2>{post.title}</h2>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  );
}