import Link from "next/link"

export default function Blog() {
  return (
    <div>
      <h1>Blog List</h1>
      <ul>
        <li>
          <Link href="/blog/1">Blog 1</Link>
        </li>
      </ul>
      <Link href="/">Home</Link>
    </div>
  )
}