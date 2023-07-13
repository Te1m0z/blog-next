import { NextPage } from 'next'
import React, { ReactNode } from 'react'
import { ThemeProvider } from 'styled-components'

export type TTheme = 'light' | 'dark'

export interface ThemeContextProps {
  theme: TTheme
  // eslint-disable-next-line no-unused-vars
  setTheme: (theme: TTheme) => void
}

export const ThemeSiteProvider: NextPage<{ children: ReactNode }> = ({ children }) => {

  // todo: get theme from storage
  const [theme, setTheme] = React.useState<TTheme>('light')

  return (
    <ThemeProvider theme={{ value: theme, setTheme }}>
      {children}
    </ThemeProvider>
  )
}
