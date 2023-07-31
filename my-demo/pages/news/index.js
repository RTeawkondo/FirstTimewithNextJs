import Link from "next/link";

export default function NewsPage() {
  return (
    <>
      <h1>The news</h1>
      <ul>
        <li><Link href="/news/nextjs">NextJs Is a Great Framework</Link></li>
        <li>Something else</li>
      </ul>
    </>
  );
}
