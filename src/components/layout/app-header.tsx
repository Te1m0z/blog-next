import React from 'react'
import Link from 'next/link'
import { useTheme } from 'styled-components'

export default function AppHeader() {
  
  const theme = useTheme()

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
      <button onClick={() => theme.setTheme('light')}>toggler</button>
      <button onClick={() => theme.setTheme('dark')}>toggler</button>
    </header>
  )
}
