import { NextPage } from 'next'
import React, { ReactNode } from 'react'
import { ThemeProvider } from 'styled-components'
import { Theme, defaultTheme } from '@/styles/themes'

export interface ThemeContextProps {
  theme: Theme
  // eslint-disable-next-line no-unused-vars
  setTheme: (theme: Theme) => void
}

export const ThemeSiteProvider: NextPage<{ children: ReactNode }> = ({ children }) => {
  const [theme, setTheme] = React.useState<Theme>(defaultTheme)

  return (
    <ThemeProvider theme={{ value: theme, setTheme }}>
      {children}
    </ThemeProvider>
  )
}
