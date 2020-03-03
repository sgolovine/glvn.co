import colors from './colors'

type Theme = {
  background: string
  text: string
  borderColor: string
}

type AppTheme = {
  light: Theme
  dark: Theme
}

export const siteTheme: AppTheme = {
  light: {
    background: colors.bg.light,
    text: colors.text.light,
    borderColor: colors.border.light,
  },
  dark: {
    background: colors.bg.dark,
    text: colors.text.dark,
    borderColor: colors.border.dark,
  },
}
