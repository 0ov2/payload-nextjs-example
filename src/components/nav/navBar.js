'use client'

import Link from 'next/link';
import { usePathname } from 'next/navigation'

export const NavBar = () => {
  const pathname = usePathname()

  return (
    <div className="w-1/4 h-full bg-white text-black">
      <nav>
        <ul>
          <li>
            <Link className={`link ${pathname === '/' ? 'active' : ''}`} href="/">Home</Link>
          </li>
          <li>
            <Link className={`link ${pathname === '/login' ? 'active' : ''}`} href="/login">Login</Link>
          </li>
          <li>
            <Link className={`link ${pathname === '/retailers' ? 'active' : ''}`} href="/retailers">Retailers</Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}
