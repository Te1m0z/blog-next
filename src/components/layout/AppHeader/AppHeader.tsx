import { useContext } from 'react'
import Link from 'next/link'
import { useTheme } from 'styled-components'
import { UserAuthContext } from '@/context/UserAuthContext'

/* STYLES */
import * as s from './AppHeaderStyles'

// vue-router ract-dom-router

export default function AppHeader() {

  const { user } = useContext(UserAuthContext)
  
  const theme = useTheme()

  return (
    <s.Header>
      <div className='container'>
        <s.Inner>
          <Link href='/'>Home</Link>
          {/* <nav>
            <ul>
              <li>
                <Link href='/'>Home</Link>
              </li>
            </ul>
          </nav> */}
          <s.ThemeBlock>
            <button onClick={() => theme.setTheme('light')}>light</button>
            <button onClick={() => theme.setTheme('dark')}>dark</button>
          </s.ThemeBlock>
          <s.AuthBlock>
            {user ? (
              <>
                <div>You are logged in</div>
              </>
            ) : (
              <Link href='/login'>Log in</Link>
            )}
          </s.AuthBlock>
        </s.Inner>
      </div>
    </s.Header>
  )
}
