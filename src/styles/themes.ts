const themes = {
  light: {
    primaryColor: '#ccc',
    secondaryColor: 'green',
  },
  dark: {
    primaryColor: '#000',
    secondaryColor: 'yellow',
  },
}

export type Theme = keyof typeof themes

export const defaultTheme: Theme = 'light'

export default themes
