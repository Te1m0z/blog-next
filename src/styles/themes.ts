import light from './themes/light'
import dark from './themes/dark'

const themes = {
  light,
  dark,
}

export type Theme = keyof typeof themes

export const defaultTheme: Theme = 'light'


// ??? refactor
type TThemeProps = {
  theme?: {
    value?: Theme
  }
}

// ??? refactor
export const currentTheme = (props: TThemeProps) => {
  if (props.theme && props.theme.value) {
    return themes[props.theme.value] || 'null'
  }
  return 'null'
}

export default themes
