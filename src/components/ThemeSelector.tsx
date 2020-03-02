import React from 'react'
import styled from 'styled-components'
import { WiMoonAltFirstQuarter } from 'react-icons/wi'
import colors from '../styles/colors'
import { useSelector, useDispatch } from 'react-redux'
import { getTheme, setTheme } from '../store'

export const ThemeSelector = () => {
  const dispatch = useDispatch()
  const themeType = useSelector(getTheme)

  const isDarkTheme = themeType === 'dark'

  const handleThemeChange = () => {
    if (isDarkTheme) {
      dispatch(setTheme('light'))
    } else {
      dispatch(setTheme('dark'))
    }
  }

  const iconColor = isDarkTheme ? colors.text.dark : colors.text.light

  return (
    <ThemeButton onClick={handleThemeChange}>
      <WiMoonAltFirstQuarter size={32} color={iconColor} />
    </ThemeButton>
  )
}

const ThemeButton = styled.button`
  background-color: transparent;
  border: transparent;
`