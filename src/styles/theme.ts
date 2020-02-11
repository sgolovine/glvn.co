import colors from './colors'

type Theme = {
  background: string
  text: string
}

type AppTheme = {
  light: Theme
  dark: Theme
}

export const siteTheme: AppTheme = {
  light: {
    background: colors.bg.light,
    text: colors.text.light,
  },
  dark: {
    background: colors.bg.dark,
    text: colors.text.dark,
  },
}
