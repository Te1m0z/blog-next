import React from 'react'
import AppHeader from './AppHeader/AppHeader'
import AppFooter from './AppFooter/AppFooter'

interface IAppLayout {
  children: React.ReactNode
}

export default function AppLayout({ children }: IAppLayout) {
  return (
    <>
      <AppHeader />
      <main className='site-content'>
        <div className='container'>
          {children}
        </div>
      </main>
      <AppFooter />
    </>
  )
}
