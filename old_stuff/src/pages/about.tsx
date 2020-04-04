import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { pageLinks } from '../data/homePageLinks'

export default () => {
  return (
    <PageContainer>
      <StyledText>
        I'm a Full Stack developer from{' '}
        <StyledExternalLink href={pageLinks.hometown}>
          Yekaterinburg, Russia
        </StyledExternalLink>{' '}
        currently living in{' '}
        <StyledExternalLink href={pageLinks.atlanta}>
          Atlanta, Georgia
        </StyledExternalLink>
        . I love creating awesome web and mobile applications that help improve
        people's lives using technologies like{' '}
        <StyledExternalLink href={pageLinks.react}>React</StyledExternalLink>,{' '}
        <StyledExternalLink href={pageLinks.reactNative}>
          React Native
        </StyledExternalLink>
        ,{' '}
        <StyledExternalLink href={pageLinks.gatsby}>Gatsby</StyledExternalLink>{' '}
        and <StyledExternalLink href={pageLinks.more}>more</StyledExternalLink>.
      </StyledText>
      <StyledText>
        When I'm not writing code I'm a world traveler, gearhead, watch nerd and
        love to get out and meet new people (usually with a pint of beer).
      </StyledText>
      <StyledText>
        If you want to learn more you can check out my{' '}
        <StyledLink to="/projects">projects</StyledLink>, or{' '}
        <StyledLink to="/contact">get in touch</StyledLink>
      </StyledText>
    </PageContainer>
  )
}

/**
 * TODO: Add more styling here
 */

const StyledExternalLink = styled.a``

const StyledLink = styled(Link)``

const PageContainer = styled.div`
  padding: 1.5em;
  max-width: 1200px;
`

const StyledText = styled.p`
  font-size: 28px;
`
