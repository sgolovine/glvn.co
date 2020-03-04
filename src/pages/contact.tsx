import React from 'react'
import { links, Link } from '../data/links'
import styled from 'styled-components'

export default () => {
  return (
    <LinkContainer>
      {links.map((link: Link, index: number) => {
        let linkHref = ''
        if (link.type === 'email') {
          linkHref = `mailto:${link.href}`
        } else if (link.type === 'tel') {
          linkHref = `tel:${link.href}`
        } else {
          linkHref = link.href
        }
        return (
          <StyledLink key={index} href={linkHref}>
            {link.name}
          </StyledLink>
        )
      })}
    </LinkContainer>
  )
}

const LinkContainer = styled.div`
  display: flex;
  flex-direction: column;
  line-height: 3.5em;
  margin-left: 1em;
`

const StyledLink = styled.a`
  font-size: 22px;
`
