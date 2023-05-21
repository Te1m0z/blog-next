import React from 'react'
import Link from 'next/link'

export default function AppHeader() {
  return (
    <header>
      Te1m0z Blog
      <nav>
        <ul>
          <li>
            <Link href='/'>Home</Link>
          </li>
          <li>
            <Link href='/login'>Log in</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}
