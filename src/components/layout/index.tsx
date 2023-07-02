import React from 'react'
import AppHeader from './app-header'
import AppFooter from './app-footer'

interface IAppLayout {
  children: React.ReactNode
}

export default function AppLayout({ children }: IAppLayout) {
  return (
    <>
      <AppHeader />
      <main className='container'>{children}</main>
      <AppFooter />
    </>
  )
}
