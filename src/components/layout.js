import React from "react"
import Header from "./Header"
import styled from "styled-components"

export default ({ children }) => {
  return (
    <SiteContainer>
      <Header />
      <LayoutContainer>{children}</LayoutContainer>
    </SiteContainer>
  )
}

const SiteContainer = styled.div`
  height: 100%;
  min-height: 100%;
`

const LayoutContainer = styled.div`
  padding: 1em;
`
