import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="flex justify-between p-4 bg-blue-600 text-white">
      <h1 className="font-bold">PortfolioX</h1>
      <div>
        <Link href="/" className="mr-4">Home</Link>
        <Link href="/blog">Blog</Link>
      </div>
    </nav>
  );
}
