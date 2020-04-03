import React from 'react'
import styled from 'styled-components'
import { links } from '../data/header'
import { Link } from 'react-router-dom'

export const BottomNav = () => {
  const footerLinks = () =>
    links.map((link) => {
      return (
        <FooterLink key={link.path} to={`/${link.path}`}>
          {link.name}&nbsp;&nbsp;&nbsp;
        </FooterLink>
      )
    })
  return <div>{footerLinks()}</div>
}

const FooterLink = styled(Link)`
  // font-family: Roboto Slab'; sans-serif;
  font-size: 18px;
  text-decoration: none;
  :hover {
    text-decoration: none;
  }
`
