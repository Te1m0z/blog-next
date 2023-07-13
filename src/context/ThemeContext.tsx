import { NextPage } from 'next'
import React, { ReactNode } from 'react'
import { ThemeProvider } from 'styled-components'

export type TMainTheme = 'light' | 'dark'

export interface ThemeContextProps {
  theme: TMainTheme
  // eslint-disable-next-line no-unused-vars
  setTheme: (theme: TMainTheme) => void
}

export const ThemeSiteProvider: NextPage<{ children: ReactNode }> = ({ children }) => {

  // todo: get theme initial value from local storage
  const [theme, setTheme] = React.useState<TMainTheme>('light')

  return (
    <ThemeProvider theme={{ value: theme, setTheme }}>
      {children}
    </ThemeProvider>
  )
}
