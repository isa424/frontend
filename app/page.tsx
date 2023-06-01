import Image from 'next/image'
import Link from 'next/link';

export default function Home() {
  return (
    <div>
        <h1>Home page</h1>
        <ul>
            <li>
                <Link href="/about">About</Link>
            </li>
            <li>
                <Link href="/users">Users</Link>
            </li>
        </ul>
    </div>
  )
}
