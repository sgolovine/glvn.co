import React, { useState } from 'react'
import styled from 'styled-components'
import { WiMoonAltFirstQuarter, WiMoonAltThirdQuarter } from 'react-icons/wi'

export const ThemeSelector = () => {
  // Placeholder until redux is implemented
  const [dark, setDark] = useState(false)
  const IconComponent = dark ? WiMoonAltFirstQuarter : WiMoonAltThirdQuarter
  return (
    <ThemeButton onClick={() => setDark(!dark)}>
      <IconComponent size={32} color="#fff" />
    </ThemeButton>
  )
}

const ThemeButton = styled.button`
  background-color: transparent;
  border: transparent;
`
