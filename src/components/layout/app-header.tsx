import React from 'react'
import Link from 'next/link'
import { useTheme } from 'styled-components'

export default function AppHeader() {
  
  const theme = useTheme()

  return (
    <header className='site-header'>
      <div className='container'>
        <Link href='/'>Te1m0z blog</Link>
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
        <button onClick={() => theme.setTheme('light')}>light</button>
        <button onClick={() => theme.setTheme('dark')}>dark</button>
      </div>
    </header>
  )
}
