import Link from "next/link"
import styles from "@/components/Header/Header.module.css"
export default function Header() {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/blog">Blog</Link>
        <Link href="/useEffect">useEffect</Link>
        <Link href="/parallel">parallel</Link>
      </nav>
    </header>
  )
}

           
// <a>タグはページ全体を再読み込みしてしまうが、<Link>タグは内部で処理するため高速にページ遷移できる
// <Link> → SPA的遷移（Nextの本領）⇒ UX・速度・キャッシュすべてに影響 */}
