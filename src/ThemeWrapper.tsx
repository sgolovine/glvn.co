import React, { ReactNode } from 'react'
import { useSelector } from 'react-redux'
import { getTheme } from './store'
import styled, { ThemeProvider } from 'styled-components'
import { siteTheme } from './styles/theme'

export const ThemeWrapper = ({ children }: { children: ReactNode }) => {
  const themeType = useSelector(getTheme)
  const theme = themeType === 'light' ? siteTheme.light : siteTheme.dark

  return (
    <ThemeProvider theme={theme}>
      <Background>{children}</Background>
    </ThemeProvider>
  )
}

const Background = styled.div`
  background-color: ${(props) => props.theme.background};
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  position: absolute;
  overflow-y: scroll;
`
