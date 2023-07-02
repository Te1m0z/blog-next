import React from 'react'
import AppHeader from './app-header'
import AppFooter from './app-footer'
//import StyledComponentsRegistry from '@/lib/registry'

interface IAppLayout {
  children: React.ReactNode
}

export default function AppLayout({ children }: IAppLayout) {
  return (
    <>
      {/* <StyledComponentsRegistry> */}
      <AppHeader />
      <main className='site-content'>
        <div className='container'>
          {children}
        </div>
      </main>
      <AppFooter />
      {/* </StyledComponentsRegistry> */}
    </>
  )
}
