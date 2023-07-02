import light from './themes/light'
import dark from './themes/dark'

const themes = {
  light,
  dark,
}

export type Theme = keyof typeof themes

export const defaultTheme: Theme = 'light'

export default themes
